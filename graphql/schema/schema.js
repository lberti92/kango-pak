const graphql = require("graphql");
const _ = require("lodash");
const User = require("../../models/Users");

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
        id: { type: GraphQLString },
        username: { type: new GraphQLNonNull(GraphQLString) }, 
        password: { type: new GraphQLNonNull(GraphQLString) },
        createdAt: { type: GraphQLString },
        name: { type: new GraphQLNonNull(GraphQLString) },
        // trips: { 
        //     type: new GraphQLList(TripType),
        //     resolve(parent, args) {
        //         // return return Trip.find({})
        //     }
        //  }
    })
});

// const TripType = new GraphQLObjectType({
//     name: "Trip",
//     fields: () => ({
//         id: { type: GraphQLID },
//         packingList: {type: GraphQLString},
//         user: {
//             type: UserType,
//             resolve(parent, args) {
//                 // return _find(user, (id: parent.userId))
//             }
//         }
//     })
// })

// how to initially jump into the graph to get data
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        // the name of the field is how it will be refrenced in queries
        user: {
            type: UserType,
            args: { id: { type: GraphQLString} },
            resolve(parent, args) {
                return User.findById(args.id);
            }
        },
        // trip: {
        //     type: TripType,
        //     args: { id: { type: GraphQLID}},
        //     resolve(parents, args) {

        //     }
        // },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return User.find({});
            }
        }
        // trips: {
        //     type: new GraphQLList(TripType) {
        //         resolve(parent, args) {
        //             return trips
        //         }
        //     }
        // }
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
            }
        , 
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
    }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});