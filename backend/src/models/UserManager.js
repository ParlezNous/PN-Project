const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (name,firstname,phone) values (?,?,?)`,
      [user.name, user.firstname, user.phone]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set name = ?, firstname = ?, phone = ? where id = ?`,
      [user.name, user.firstname, user.phone, user.id]
    );
  }
}

module.exports = UserManager;
