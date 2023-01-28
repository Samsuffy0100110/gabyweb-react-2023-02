/* eslint-disable prettier/prettier */
const express = require("express");

const router = express.Router();

const authControllers = require("./controllers/authControllers");
const serviceControllers = require("./controllers/serviceControllers");
const projectControllers = require("./controllers/projectControllers");
const reviewControllers = require("./controllers/reviewControllers");
const stackControllers = require("./controllers/stackControllers");

router.post("/login", authControllers.login);

router.get("/services", serviceControllers.browse);
router.get("/service/:id", serviceControllers.read);
router.put("/service/:id", serviceControllers.edit);
router.post("/service", serviceControllers.add);
router.delete("/service/:id", serviceControllers.destroy);

router.get("/reviews", reviewControllers.browse);
router.get("/review/:id", reviewControllers.read);
router.put("/review/:id", reviewControllers.edit);
router.post("/review", reviewControllers.add);
router.delete("/review/:id", reviewControllers.destroy);

router.get("/projects", projectControllers.browse);
router.get("/project/:id", projectControllers.read);
router.put("/project/:id", projectControllers.edit);
router.post("/project", projectControllers.add);
router.delete("/project/:id", projectControllers.destroy);
router.get("/project/:id/stacks", projectControllers.stacks);

router.get("/stacks", stackControllers.browse);
router.get("/stack/:id", stackControllers.read);
router.put("/stack/:id", stackControllers.edit);
router.post("/stack", stackControllers.add);
router.delete("/stack/:id", stackControllers.destroy);

module.exports = router;
