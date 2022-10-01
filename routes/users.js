var express = require('express');
const {
    addUser, getUsers, deleteUser, updateUser, getUserById
} = require('../services/users')
const router = express.Router();

router.get('/', getUsers)

router.post("/", addUser)

router.delete("/:id", deleteUser)

router.patch("/:id", updateUser)

router.get("/:id", getUserById)

module.exports = router;

