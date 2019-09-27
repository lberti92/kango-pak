const graphql = require("graphql");
const { User, Trip, Itinerary, Clothing, Packing } = require("../../models/index");


const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLFloat
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
        // packingList: { type: GraphQLString },
        location: { type: GraphQLString },
        length: { type: GraphQLString },
        climate: { type: GraphQLString },
        traveler: { type: GraphQLString },
        luggage: { type: GraphQLString },
        apparel: { type: GraphQLString },
        user: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return User.find({ trips: parent._id })
            }
        },
        itinerary: {
            type: new GraphQLList(ItineraryType),
            resolve(parent, args) {
                return Itinerary.find({ trip: parent._id }).sort({ date: 1 })
            }
        },
        packing: {
            type: new GraphQLList(PackingType),
            resolve(parent, args) {
                return Packing.find({trip: parent._id})
            }
        }
    })
})

const ItineraryType = new GraphQLObjectType({
    name: "Itinerary",
    fields: () => ({
        _id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        date: { type: new GraphQLNonNull(GraphQLString) },
        notes: { type: new GraphQLNonNull(GraphQLString) }
    })
})


const ClothingType = new GraphQLObjectType({
    name: "Clothing",
    fields: () => ({
        name: {type: GraphQLString},
        weight: {type: GraphQLFloat},
        climate: { type: new GraphQLList(GraphQLString) },
        apparel: { type: GraphQLString }
    })
})


const PackingType = new GraphQLObjectType({
    name: "Packing",
    fields: () => ({
        _id: { type: new GraphQLNonNull(GraphQLString) },
        trip: { type: new GraphQLNonNull(GraphQLString) },
        items: { type: GraphQLString },
        weight: { type: GraphQLFloat },
        notes: { type: GraphQLString }
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
        },
        itinerary: {
            type: new GraphQLList(ItineraryType),
            args: {tripId: {type: GraphQLString}},
            resolve(parent, args) {
                return Itinerary.find({trip: args.tripId})
            }
        },

        clothing: {
            type: new GraphQLList(ClothingType),
            args: {
                apparel: { type: GraphQLString },
                climate: { type: GraphQLString }
            },
            resolve(parent, args) {
                return Clothing.find({ climate: args.climate, apparel: args.apparel })
            }
        },
        packing: {
            type: new GraphQLList(PackingType),
            args: {
                tripId: { type: GraphQLString }
            },
            resolve(parent, args) {
                return Packing.find({ trip: args.tripId })
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
                userId: { type: GraphQLString },
                location: { type: GraphQLString },
                length: { type: GraphQLString },
                climate: { type: GraphQLString },
                traveler: { type: GraphQLString },
                luggage: { type: GraphQLString },
                apparel: { type: GraphQLString }


            },
            resolve: async function (parent, args) {
                let trip = new Trip({
                    user: args.userId,
                    location: args.location,
                    length: args.length,
                    climate: args.climate,
                    traveler: args.traveler,
                    luggage: args.luggage,
                    apparel: args.apparel
                });
                const newTrip = await trip.save()

                let savedUser = ""
                if (newTrip) {
                    savedUser = await User.findByIdAndUpdate({ _id: args.userId }, { $push: { trips: newTrip._id } })
                }

                if (savedUser) {
                    return newTrip
                }
            }
        },
        removeTrip: {
            type: TripType,
            args: {
                _id: {type: GraphQLString}
            },
            resolve(parent, args) {
               return Trip.findOneAndRemove({_id: args._id})
            }
        },
        addItinerary: {
            type: ItineraryType,
            args: {
                tripId: { type: GraphQLString },
                title: { type: GraphQLString },
                date: { type: GraphQLString },
                notes: { type: GraphQLString }
            },
            resolve(parent, args) {
                let itinerary = new Itinerary({
                    trip: args.tripId,
                    title: args.title,
                    date: args.date,
                    notes: args.notes
                })
                return itinerary.save()
            }
        },
        removeItinerary: {
            type: ItineraryType,
            args: {
                _id: {type: GraphQLString}
            },
            resolve(parent, args) {
               return Itinerary.findOneAndRemove({_id: args._id})
            }
        },
        addPackingList: {
            type: PackingType,
            args: {
                tripId: { type: GraphQLString },
                items: { type: GraphQLString },
                weight: { type: GraphQLFloat },
                notes: { type: GraphQLString }
            },
            resolve: async function (parent, args) {
                let packing = new Packing({
                    trip: args.tripId,
                    items: args.items,
                    weight: args.weight,
                    notes: args.notes
                });
                const newPacking = await packing.save()

                let savedTrip = ""
                if (newPacking) {
                    savedTrip = await Trip.findByIdAndUpdate({ _id: args.tripId }, { packing: newPacking._id })
                }

                if (savedTrip) {
                    return newPacking
                }
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});