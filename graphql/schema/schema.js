const graphql = require("graphql");
const User = require("../../models/Users");
const Trip = require("../../models/Trip");
const Itinerary = require("../../models/Itinerary");
const Women = require("../../models/Women");
const Men = require("../../models/Men");
const Neutral = require("../../models/Neutral");
const Cold = require("../../models/Cold");
const Desert = require("../../models/Desert");
const Seasonal = require("../../models/Seasonal");
const Warm = require("../../models/Warm");
const Tropical = require("../../models/Tropical");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLFloat,
    GraphQLInt
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
        itinerary: {
            type: new GraphQLList(ItineraryType),
            resolve(parent, args) {
                return Itinerary.find({ trip: parent._id })
            }
        }
    })
})

const ItineraryType = new GraphQLObjectType({
    name: "Itinerary",
    fields: () => ({
        _id: { type: new GraphQLNonNull(GraphQLID) },
        item: { type: new GraphQLNonNull(GraphQLString) }
    })
})

const MenType = new GraphQLObjectType({
    name: "Men",
    fields: () => ({
        name: { type: GraphQLString },
        weight: { type: GraphQLFloat },
        weatherId: { type: GraphQLList(GraphQLInt) },
        cold: {
            type: ColdType,
            resolve(parent, args) {
                return Cold.find({})
            }
        },
        desert: {
            type: DesertType,
            resolve(parent, args) {
                return Desert.find({})
            }
        },
        tropical: {
            type: TropicalType,
            resolve(parent, args) {
                return Tropical.find({})
            }
        },
        warm: {
            type: WarmType,
            resolve(parent, args) {
                return Warm.find({})
            }
        },
        seasonal: {
            type: SeasonalType,
            resolve(parent, args) {
                return Seasonal.find({})
            }
        }

    })
});

const WomenType = new GraphQLObjectType({
    name: "Women",
    fields: () => ({
        name: { type: GraphQLString },
        weight: { type: GraphQLFloat },
        weatherId: { type: GraphQLList(GraphQLInt) },
        cold: {
            type: ColdType,
            resolve(parent, args) {
                return Cold.find({})
            }
        },
        desert: {
            type: DesertType,
            resolve(parent, args) {
                return Desert.find({})
            }
        },
        tropical: {
            type: TropicalType,
            resolve(parent, args) {
                return Tropical.find({})
            }
        },
        warm: {
            type: WarmType,
            resolve(parent, args) {
                return Warm.find({})
            }
        },
        seasonal: {
            type: SeasonalType,
            resolve(parent, args) {
                return Seasonal.find({})
            }
        }
    })
});

const NeutralType = new GraphQLObjectType({
    name: "Neutral",
    fields: () => ({
        name: { type: GraphQLString },
        weight: { type: GraphQLFloat },
        weatherId: { type: GraphQLList(GraphQLInt) },
        cold: {
            type: ColdType,
            resolve(parent, args) {
                return Cold.find({})
            }
        },
        desert: {
            type: DesertType,
            resolve(parent, args) {
                return Desert.find({})
            }
        },
        tropical: {
            type: TropicalType,
            resolve(parent, args) {
                return Tropical.find({})
            }
        },
        warm: {
            type: WarmType,
            resolve(parent, args) {
                return Warm.find({})
            }
        },
        seasonal: {
            type: SeasonalType,
            resolve(parent, args) {
                return Seasonal.find({})
            }
        }
    })
});

const ColdType = new GraphQLObjectType({
    name: "Cold",
    fields: () => ({
        name: { type: GraphQLString },
        mens: {
            type: new GraphQLList(MenType),
            resolve(parent, args) {
                return Men.find({ weatherId: 1 })
            }
        },
        womens: {
            type: new GraphQLList(WomenType),
            resolve(parent, args) {
                return Women.find({ weatherId: 1 })
            }
        },
        neutrals: {
            type: new GraphQLList(NeutralType),
            resolve(parent, args) {
                return Neutral.find({ weatherId: 1 })
            }
        }
    })
});

const DesertType = new GraphQLObjectType({
    name: "Desert",
    fields: () => ({
        name: { type: GraphQLString },
        mens: {
            type: new GraphQLList(MenType),
            resolve(parent, args) {
                return Men.find({ weatherId: 2 })
            }
        },
        womens: {
            type: new GraphQLList(WomenType),
            resolve(parent, args) {
                return Women.find({ weatherId: 2 })
            }
        },
        neutrals: {
            type: new GraphQLList(NeutralType),
            resolve(parent, args) {
                return Neutral.find({ weatherId: 2 })
            }
        }
    })
});

const TropicalType = new GraphQLObjectType({
    name: "Tropical",
    fields: () => ({
        name: { type: GraphQLString },
        mens: {
            type: new GraphQLList(MenType),
            resolve(parent, args) {
                return Men.find({ weatherId: 3 })
            }
        },
        womens: {
            type: new GraphQLList(WomenType),
            resolve(parent, args) {
                return Women.find({ weatherId: 3 })
            }
        },
        neutrals: {
            type: new GraphQLList(NeutralType),
            resolve(parent, args) {
                return Neutral.find({ weatherId: 3 })
            }
        }
    })
});

const WarmType = new GraphQLObjectType({
    name: "Warm",
    fields: () => ({
        name: { type: GraphQLString },
        mens: {
            type: new GraphQLList(MenType),
            resolve(parent, args) {
                return Men.find({ weatherId: 4 })
            }
        },
        womens: {
            type: new GraphQLList(WomenType),
            resolve(parent, args) {
                return Women.find({ weatherId: 4 })
            }
        },
        neutrals: {
            type: new GraphQLList(NeutralType),
            resolve(parent, args) {
                return Neutral.find({ weatherId: 4 })
            }
        }
    })
});

const SeasonalType = new GraphQLObjectType({
    name: "Seasonal",
    fields: () => ({
        name: { type: GraphQLString },
        mens: {
            type: new GraphQLList(MenType),
            resolve(parent, args) {
                return Men.find({ weatherId: 5 })
            }
        },
        womens: {
            type: new GraphQLList(WomenType),
            resolve(parent, args) {
                return Women.find({ weatherId: 5 })
            }
        },
        neutrals: {
            type: new GraphQLList(NeutralType),
            resolve(parent, args) {
                return Neutral.find({ weatherId: 5 })
            }
        }
    })
});

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
        },
        mens: {
            type: new GraphQLList(MenType),
            resolve(parent, args) {
                return Men.find();
            }
        },
        womens: {
            type: new GraphQLList(WomenType),
            resolve(parent, args) {
                return Women.find();
            }
        },
        neutrals: {
            type: new GraphQLList(NeutralType),
            resolve(parent, args) {
                return Neutral.find();
            }
        },
        cold: {
            type: ColdType,
            resolve(parent, args) {
                return Cold.find({});
            }
        },
        desert: {
            type: DesertType,
            resolve(parent, args) {
                return Desert.find({});
            }
        },
        tropical: {
            type: TropicalType,
            resolve(parent, args) {
                return Tropical.find({});
            }
        },
        warm: {
            type: WarmType,
            resolve(parent, args) {
                return Warm.find({});
            }
        },
        seasonal: {
            type: SeasonalType,
            resolve(parent, args) {
                return Seasonal.find({});
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
        addItinerary: {
            type: ItineraryType,
            args: {
                item: { type: GraphQLString },
                tripId: { type: GraphQLString }
            }, 
            resolve(parents, args) {
                let Itinerary = new Itinerary({
                    item: args.item,
                    trip: args.tripId
                })
                return itinerary.save()
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});