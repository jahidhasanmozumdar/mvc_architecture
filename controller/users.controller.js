const users = require('../model/user.model');
const path = require('path')
exports.getUser = (req, res) => {
  res.sendFile(path.join(__dirname + '/../view/index.html'));
};

exports.saveUsers = (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  let user = { name, age };
  users.push(user);
  res.status(201).json({
    success: true,
    users,
  });
};
