/* eslint-disable prettier/prettier */
const AbstractManager = require("./AbstractManager");

class ServiceManager extends AbstractManager {
    constructor() {
        super({ table: "service" });
    }
    
    insert(service) {
        return this.connection.query(
        `INSERT INTO ${this.table} (title, description, icon) values (?, ?, ?)`,
        [
            service.title,
            service.description,
            service.icon,
        ]
        );
    }

    update(service) {
        return this.connection.query(
        `update ${this.table} set title = ?, description = ?, icon = ? where id = ?`,
        [
            service.title,
            service.description,
            service.icon,
            service.id,
        ]
        );
    }
}

module.exports = ServiceManager;