/* eslint-disable prettier/prettier */
const AbstractManager = require("./AbstractManager");

class ReviewManager extends AbstractManager {
    constructor() {
        super({ table: "review" });
    }
    
    insert(review) {
        return this.connection.query(
        `INSERT INTO ${this.table} (name, review, logo) values (?, ?, ?)`,
        [
            review.name,
            review.review,
            review.logo,
        ]
        );
    }

    update(review) {
        return this.connection.query(
        `update ${this.table} set name = ?, review = ?, logo = ? where id = ?`,
        [
            review.name,
            review.review,
            review.logo,
            review.id,
        ]
        );
    }
}

module.exports = ReviewManager;