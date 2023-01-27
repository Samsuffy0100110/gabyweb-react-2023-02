/* eslint-disable prettier/prettier */
const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  insert(project) {
    return this.connection.query(
      `INSERT INTO ${this.table} (title, description, date, image, stack, url) values (?, ?, ?, ?, ?, ?)`,
      [
        project.title,
        project.description,
        project.date,
        project.image,
        project.stack,
        project.url,
      ]
    );
  }

  update(project) {
    return this.connection.query(
      `update ${this.table} set title = ?, description = ?, date = ?, image = ?, stack = ?, url = ? where id = ?`,
      [
        project.title,
        project.description,
        project.date,
        project.image,
        project.stack,
        project.url,
        project.id,
      ]
    );
  }
}

module.exports = ProjectManager;
