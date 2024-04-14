
const { User } = require("../models");

const userData = [
  {
    username: "pcbuilder1",
    email: "bobthebuilder@gmail.com",
    password: "password1",
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;