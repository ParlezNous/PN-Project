const AbstractManager = require("./AbstractManager");

class SellerManager extends AbstractManager {
  constructor() {
    super({ table: "sellers" });
  }

  insert(seller) {
    return this.database.query(
      `insert into ${this.table} (firstname, name, shop, email) values (?,?,?,?,?)`,
      [seller.title]
    );
  }

  update(seller) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [seller.title, seller.id]
    );
  }
}

module.exports = SellerManager;
