/* eslint-disable prettier/prettier */
const models = require("../models");

const login = (req, res) => {
    const user = req.body;

    // TODO validations (length, format...)

    models.user
        .findOneByPseudo(user.pseudo)
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

module.exports = {
    login,
};
