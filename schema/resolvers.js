import db from '../_db.js';

export const resolvers = {
  Query: {
    // GAMES RESOLVERS
    games() {
      return db.games;
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
    // AUTHORS RESOLVERS
    authors() {
      return db.authors;
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
    // REVIEWS RESOLVERS
    reviews() {
      return db.reviews;
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
  },
  // RELATIONSHIPS RESOLVERS
  Game: {
    reviews(parent) {
      return db.reviews.filter((r) => r.game_id === parent.id);
    },
  },
  Review: {
    author(parent) {
      return db.authors.find((a) => a.id === parent.author_id);
    },
    game(parent) {
      return db.games.find((g) => g.id === parent.game_id);
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((r) => r.author_id === parent.id);
    },
  },
  // MUTATIONS RESOLVERS
  Mutation: {
    addGame(_, args) {
      const lastId = db.games[db.games.length - 1].id;
      let game = {
        ...args.game,
        id: Number(lastId) + 1,
      };
      db.games.push(game);

      return game;
    },
    deleteGame(_, args) {
      db.games = db.games.filter((g) => g.id !== args.id);

      return db.games;
    },
  },
};
