const graphql = require("graphql");
const User = require("../../models/Users");
const Trip = require("../../models/Trip");
const Itenerary = require("../../models/Itenerary");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} = graphql;

const UserType = new GraphQLObjectType({
    name: "User",
    // function so it can interact with other graphql objects
    fields: () => ({
        _id: { type: GraphQLID },
        username: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        createdAt: { type: GraphQLString },
        name: { type: new GraphQLNonNull(GraphQLString) },
        trips: {
            type: new GraphQLList(TripType),
            resolve(parent, args) {
                return Trip.find({ user: parent._id })
            }
        }
    })
});

const TripType = new GraphQLObjectType({
    name: "Trip",
    fields: () => ({
        _id: { type: GraphQLID },
        name: { type: GraphQLString },
        // packingList: { type: GraphQLString },
        user: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return User.find({ trips: parent._id })
            }
        },
        itenerary: {
            type: new GraphQLList(IteneraryType),
            resolve(parent, args) {
                return Itenerary.find({ trip: parent._id })
            }
        }
    })
})

const IteneraryType = new GraphQLObjectType({
    name: "Itenerary",
    fields: () => ({
        _id: { type: new GraphQLNonNull(GraphQLID) },
        item: { type: new GraphQLNonNull(GraphQLString) }
    })
})

// how to initially jump into the graph to get data
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        // the name of the field is how it will be refrenced in queries
        user: {
            type: UserType,
            args: { _id: { type: GraphQLString } },
            resolve(parent, args) {
                return User.findById(args._id);
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return User.find({});
            }
        },
        trip: {
            type: TripType,
            args: { _id: { type: GraphQLString } },
            resolve(parent, args) {
                return Trip.findById(args._id)
            }
        },
        trips: {
            type: new GraphQLList(TripType),
            resolve() {
                return Trip.find({})
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addUser: {
            type: UserType,
            args: {
                username: { type: GraphQLString },
                password: { type: GraphQLString },
                name: { type: GraphQLString },
            },
            resolve(parent, args) {
                // using the mongoose model
                let user = new User({
                    username: args.username,
                    password: args.password,
                    name: args.name
                })
                user.password = user.generateHash(args.password);
                // save to the mongo db and return the object that was inserted
                return user.save()
            }
        },
        addTrip: {
            type: TripType,
            args: {
                userId: { type: GraphQLID },
                name: { type: GraphQLString }
            },
            resolve: async function(parent, args) {
                let trip = new Trip({
                    name: args.name, 
                    user: args.userId
                });
                const newTrip = await trip.save()

                let savedUser = ""
                if(newTrip) {
                    savedUser = await User.findByIdAndUpdate({_id: args.userId}, {$push: {trips: newTrip._id}})
                }

                if(savedUser) {
                    return newTrip
                }
                
            }
        }, 
        addItenerary: {
            type: IteneraryType,
            args: {
                item: { type: GraphQLString },
                tripId: { type: GraphQLString }
            }, 
            resolve(parents, args) {
                let itenerary = new Itenerary({
                    item: args.item,
                    trip: args.tripId
                })
                return itenerary.save()
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});