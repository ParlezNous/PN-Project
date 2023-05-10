const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "messages" });
  }

  insert(message) {
    return this.database.query(`insert into ${this.table} (author,content) values (?,?)`, [
      message.author, message.content
    ]);
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [user.title, user.id]
    );
  }
}

module.exports = ItemManager;
