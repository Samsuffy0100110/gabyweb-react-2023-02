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
