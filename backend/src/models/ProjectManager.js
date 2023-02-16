/* eslint-disable prettier/prettier */
const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  // findProjectsAndStacks() {
  //   return this.connection.query(
  //     `SELECT
  //       project.id,
  //       project.title,
  //       project.description,
  //       project.date,
  //       project.image,
  //       project.url,
  //       GROUP_CONCAT(stack.name) AS stack
  //     FROM project
  //     LEFT JOIN project_stack ON project.id = project_stack.project_id
  //     LEFT JOIN stack ON project_stack.stack_id = stack.id
  //     GROUP BY project.id
  //     ORDER BY project.date DESC`
  //   );
  // }

  insert(project) {
    return this.connection.query(
      `INSERT INTO ${this.table} (name, description, date, image, url) values (?, ?, ?, ?, ?)`,
      [
        project.name,
        project.description,
        project.date,
        project.image,
        project.url,
      ]
    );
  }

  update(project) {
    return this.connection.query(
      `update ${this.table} set name = ?, description = ?, date = ?, image = ?, url = ? where id = ?`,
      [
        project.name,
        project.description,
        project.date,
        project.image,
        project.url,
        project.id,
      ]
    );
  }
}

module.exports = ProjectManager;
