const {Router, response} = require ("express");
const { request } = require("../app");
const router = Router();

const {getUsers, createUser, getUser, updateUser,deleteUser} = require("../controllers/user-controller");

router.route("/")
    .get(getUsers)
    .post(createUser);

    router.route("/:id")
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports= router;