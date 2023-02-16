/* eslint-disable prettier/prettier */
const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
    constructor() {
        super({ table: "user" });
    }

    findOneByPseudo(pseudo) {
        return this.connection.query(
            `SELECT * FROM ${this.table} WHERE pseudo = ?`,
            [pseudo]
        );
    }
}

module.exports = UserManager;