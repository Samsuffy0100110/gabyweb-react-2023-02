/* eslint-disable prettier/prettier */
const AbstractManager = require("./AbstractManager");

class StackManager extends AbstractManager {
    constructor() {
        super({ table: "stack" });
    }

    getStacksByProjectId(id) {
        return this.connection.query(
            `SELECT
                stack.id,
                stack.name,
                stack.image
            FROM
                stack
            INNER JOIN
                project_stack
            ON
                stack.id = project_stack.stack_id
            WHERE
                project_stack.project_id = ?`,
            [id]
        );
    }

    insert(stack) {
        return this.connection.query(
            `INSERT INTO ${this.table} (name, image) values (?, ?)`,
            [stack.name, stack.image]
        );
    }

    update(stack) {
        return this.connection.query(
            `update ${this.table} set name = ?, image = ? where id = ?`,
            [stack.name, stack.image, stack.id]
        );
    }
}



module.exports = StackManager;