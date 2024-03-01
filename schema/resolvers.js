import db from '../_db.js';

export const resolvers = {
  Query: {
    games() {
      return db.games; // return all games here, but graphql will do it's magic to only return the fields requested for the query
    },
    authors() {
      return db.authors;
    },
    reviews() {
      return db.reviews;
    },
  },
};
