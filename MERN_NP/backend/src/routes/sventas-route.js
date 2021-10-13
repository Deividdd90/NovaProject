const {Router, response} = require ("express");
const { request } = require("../app");
const router = Router();

const {getSventas, createSventa, getSventa, updateSventa, deleteSventa} = require("../controllers/sventas-controller");

router.route("/")
    .get(getSventas)
    .post(createSventa);

    router.route("/:id")
    .get(getSventa)
    .put(updateSventa)
    .delete(deleteSventa)

module.exports= router;