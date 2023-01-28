/* eslint-disable prettier/prettier */
const models = require("../models");

const browse = (req, res) => {
    models.stack
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
    models.stack
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
    const stack = req.body;

    // TODO validations (length, format...)

    stack.id = parseInt(req.params.id, 10);

    models.stack
        .update(stack)
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
    const stack = req.body;

    // TODO validations (length, format...)

    models.stack
        .insert(stack)
        .then(([result]) => {
            res.send({ id: result.insertId });
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
};

const destroy = (req, res) => {
    models.stack
        .delete(req.params.id)
        .then(([result]) => {
            if (result.affectedRows === 0) {
                res.sendStatus(404);
            } else {
                res.sendStatus(204);
            }
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
};

module.exports = {
    browse,
    read,
    edit,
    add,
    destroy,
};