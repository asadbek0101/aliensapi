const User = require("../modules/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err,
      });
    }
    let user = new User({
      email: req.body.email,
      name: req.body.name,
      password: hashedPass,
      phone: req.body.phone,
    });
    user
      .save()
      .then((user) => {
        res.json({
          massege: "User added Successfully!!",
        });
      })
      .catch((error) => {
        res.json({
          massege: "An errror ocuredd",
        });
      });
  });
};
const login = (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ $or: [{ email: username }, { phone: username }] }).then(
    (user) => {
      if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            res.json({
              error: err,
            });
          }
          if (result) {
            let token = jwt.sign({ name: user.name }, "VerySecretValue", {
              expiresIn: "1h",
            });
            res.json({
              massege: "User successfully",
              token,
              user,
            });
          } else {
            res.json({
              massege: "Password does not matched ",
            });
          }
        });
      } else {
        res.json({
          massege: "No user found",
        });
      }
    }
  );
};

module.exports = { register, login };
