const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Response } = require('../models');
const { findOneAndUpdate } = require('../models/User');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;