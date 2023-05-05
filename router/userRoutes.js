const express = require('express');
const { getUser, saveUsers } = require('../controller/users.controller');
const router = express.Router();

router.get("/users", getUser);

router.post("/users", saveUsers);

module.exports = router;
