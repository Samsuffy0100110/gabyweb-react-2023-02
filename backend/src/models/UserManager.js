/* eslint-disable prettier/prettier */
const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
    constructor() {
        super({ table: "user" });
    }

    insert(user) {
        return this.connection.query(
            `INSERT INTO ${this.table} (pseudo, password, role) values (?, ?, ?)`,
            [user.pseudo, user.password, user.role]
        );
    }

    update(user) {
        return this.connection.query(
            `update ${this.table} set pseudo = ?, password = ?, role = ? where id = ?`,
            [user.pseudo, user.password, user.role, user.id]
        );
    }

    findOneByPseudo(pseudo) {
        return this.connection.query(
            `SELECT * FROM ${this.table} WHERE pseudo = ?`,
            [pseudo]
        );
    }
}

module.exports = UserManager;