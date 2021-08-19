const { User } = require('../models');

const resolvers = {
    Query: {
        me: async () => {
            return User.find({});
        },
    },
    Mutation: {
//TODO this
    },
};

module.exports = resolvers;