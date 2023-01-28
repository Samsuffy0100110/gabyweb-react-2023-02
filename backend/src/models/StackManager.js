/* eslint-disable prettier/prettier */
const AbstractManager = require("./AbstractManager");

class ServiceManager extends AbstractManager {
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
}

module.exports = ServiceManager;