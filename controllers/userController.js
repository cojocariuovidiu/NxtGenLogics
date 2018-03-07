var passport = require('passport');
var config = require('../db');
require('../passport')(passport);
var jwt = require('jsonwebtoken');
var User = require("../models/user");


exports.signup = function(req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({
      success: false,
      message: 'Please pass username and password.'
    });
  } else {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      name: req.body.name
    });
    newUser.save(function(err) {
      if (err) {
        return res.status(200).send({
          status: "error",
          message: "Username already exist.",
          errorInfo: err
        })
      }
      res.status(200).send({
        status: "success",
        message: "successfully created user."
      });
    });
  }
};

exports.login = function(req, res) {
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(200).send({
        status: "success",
        message: 'Authentication failed. User not found.'
      });
    } else {

      user.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch && !err) {

          var token = jwt.sign(user.toJSON(), config.secret);

          res.json({
            status: "success",
            token: 'JWT ' + token
          });
        } else {
          res.status(201).send({
            status: "success",
            message: 'Authentication failed. Wrong password.'
          });
        }
      });
    }
  });
};


exports.userlist = function(req, res) {
        User.find( (err, users)=> {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting trains.',
                    error: err
                });
            }
            return res.json(users);
        });
    };
