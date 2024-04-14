const { Post } = require("../models");

const postData = [
  {
    title: "I Build PCs for Free!",
    content: "Hello all I build computer for free!",
    user_id: 1,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;