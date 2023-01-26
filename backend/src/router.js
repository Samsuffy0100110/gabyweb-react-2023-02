/* eslint-disable prettier/prettier */
const express = require("express");

const router = express.Router();

const projectControllers = require("./controllers/projectControllers");
const authControllers = require("./controllers/authControllers");

router.get("/projects", projectControllers.browse);
router.get("/project/:id", projectControllers.read);
router.put("/project/:id", projectControllers.edit);
router.post("/project", projectControllers.add);
router.delete("/project/:id", projectControllers.destroy);
router.post("/login", authControllers.login);

module.exports = router;
