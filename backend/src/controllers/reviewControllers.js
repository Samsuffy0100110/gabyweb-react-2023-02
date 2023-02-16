/* eslint-disable prettier/prettier */
const models = require("../models");

const browse = (req, res) => {
    models.review
        .findAll()
        .then(([rows]) => {
            res.send(rows);
        }
        )
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        }
        );
};

const read = (req, res) => {
    models.review
        .find(req.params.id)
        .then(([rows]) => {
            if (rows[0] == null) {
                res.sendStatus(404);
            } else {
                res.send(rows[0]);
            }
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
};

const edit = (req, res) => {
    const review = req.body;

    // TODO validations (length, format...)

    review.id = parseInt(req.params.id, 10);

    models.review
        .update(review)
        .then(([result]) => {
            if (result.affectedRows === 0) {
                res.sendStatus(404);
            } else {
                res.sendStatus(204);
            }
        }
        )
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        }
        );
};

const add = (req, res) => {
    const review = req.body;

    // TODO validations (length, format...)

    models.review
        .insert(review)
        .then(([result]) => {
            res.send({ id: result.insertId });
        }
        )
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        }
        );
};

const destroy = (req, res) => {
    models.review
        .delete(req.params.id)
        .then(([result]) => {
            if (result.affectedRows === 0) {
                res.sendStatus(404);
            } else {
                res.sendStatus(204);
            }
        }
        )
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        }
        );
};

module.exports = {
    browse,
    read,
    edit,
    add,
    destroy,
};
