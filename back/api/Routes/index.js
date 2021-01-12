const router = require('express').Router();
const {User} = require('../Models/index');

router.post("/register", (req, res) => {
    console.log("Estas en register")
    console.log(req.body)
    User.create(req.body).then((users) => {
       console.log("Estás registrado!");
       res.send(users);
    });
});

router.get("/users", (req, res) => {
    User.findAll().then((users) => {
      res.send(users);
    });
});

module.exports = router;