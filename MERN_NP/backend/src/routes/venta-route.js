const {Router, response} = require ("express");
const { request } = require("../app");
const router = Router();

const {getVentas, createVenta, getVenta, updateVenta, deleteVenta} = require("../controllers/venta-controller");

router.route("/")
    .get(getVentas)
    .post(createVenta);

    router.route("/:id")
    .get(getVenta)
    .put(updateVenta)
    .delete(deleteVenta)

module.exports= router;