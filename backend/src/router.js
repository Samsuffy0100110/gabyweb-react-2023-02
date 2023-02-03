/* eslint-disable prettier/prettier */
const express = require("express");

const router = express.Router();
const fs = require("fs");
const multer = require("multer");

const serviceUpload = multer({ dest: "uploads/service/" });
const projectUpload = multer({ dest: "uploads/project/" });
const reviewUpload = multer({ dest: "uploads/review/" });


const authControllers = require("./controllers/authControllers");
const serviceControllers = require("./controllers/serviceControllers");
const projectControllers = require("./controllers/projectControllers");
const reviewControllers = require("./controllers/reviewControllers");

router.post("/login", authControllers.login);

router.get("/services", serviceControllers.browse);
router.get("/service/:id", serviceControllers.read);
router.put("/service/:id", serviceControllers.edit);
router.post("/service", serviceControllers.add);
router.delete("/service/:id", serviceControllers.destroy);
router.post("/service/icon/", serviceUpload.single("icon"), (req, res) => {
    const { originalname } = req.file;
    const { filename } = req.file;
    fs
        .rename(`uploads/service/${filename}`, `uploads/service/${originalname}`, (err) => {
            if (err) throw err;
            res.send("File uploaded");
        });
});

router.delete("/service/icon/:fileName", (req, res) => {
    const filePath = `uploads/service/${req.params.fileName}`;
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(204);
        }
    });
});

router.get("/reviews", reviewControllers.browse);
router.get("/review/:id", reviewControllers.read);
router.put("/review/:id", reviewControllers.edit);
router.post("/review", reviewControllers.add);
router.delete("/review/:id", reviewControllers.destroy);

router.post("/review/logo", reviewUpload.single("logo"), (req, res) => {
    const { originalname } = req.file;
    const { filename } = req.file;
    fs
        .rename(`uploads/review/${filename}`, `uploads/review/${originalname}`, (err) => {
            if (err) throw err;
            res.send("File uploaded");
        });
});

router.delete("/review/logo/:fileName", (req, res) => {
    const filePath = `uploads/review/${req.params.fileName}`;
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(204);
        }
    });
});

router.get("/projects", projectControllers.browse);
router.get("/project/:id", projectControllers.read);
router.put("/project/:id", projectControllers.edit);
router.post("/project", projectControllers.add);
router.delete("/project/:id", projectControllers.destroy);
// router.get("/project/:id/stacks", projectControllers.stacks);

router.post("/project/image", projectUpload.single("image"), (req, res) => {
	const { originalname } = req.file;
	const { filename } = req.file;
	fs
		.rename(`uploads/project/${filename}`, `uploads/project/${originalname}`, (err) => {
			if (err) throw err;
			res.send("File uploaded");
		});
});

router.delete("/project/image/:fileName", (req, res) => {
    const filePath = `uploads/project/${req.params.fileName}`;
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(204);
        }
    });
});

module.exports = router;
