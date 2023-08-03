const User = require("../models/users.models");
const emailSender=require('../helpers/emailSender.helper');

getUsers = (req, res) => {
  User.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("error" + err));
};

subscribeUser = async (req, res) => {
  try {
    
    const user = new User(req.body);
    await user.save();
    const status=await emailSender(user);
    res.json({
      user:user,
      emailStatus:status});
  } catch (err) {
    res.status(400).json("error posting data");
  }
};

module.exports = {
  getUsers,
  subscribeUser,
};
