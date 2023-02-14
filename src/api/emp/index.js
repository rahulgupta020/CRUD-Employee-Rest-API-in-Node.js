const express = require("express");
const router = express.Router();
const employee = require("./model")

const { createEmpData, readEmpData, getParticularEmpData, updateEmpData, deleteEmpData } = require("./controller");

router.post("/apiemployee", createEmpData)
router.get("/apiemployee", readEmpData)
router.get("/apiemployee/:id", getParticularEmpData)
router.patch("/apiemployee/:id", updateEmpData)
router.delete("/apiemployee/:id", deleteEmpData)


module.exports = router;