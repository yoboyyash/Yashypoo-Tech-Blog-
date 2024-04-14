const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Okay then build mee one! I want one with a RTX 4090TI !",
    user_id: 1,
    post_id: 1,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;