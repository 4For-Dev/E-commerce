const express = require("express");
const router = express.Router();
const { createUser,loginUser, getallUser } = require("../controller/UserCtrl")
router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/all-users",getallUser)
module.exports = router;