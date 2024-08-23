const AbstractRepository = require("./AbstractRepository");

class PlayerRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "user" as configuration
    super({table: "player"});
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      `select *
       from ${this.table}
       where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }


  async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "user" table
    const [rows] = await this.database.query(
      `select *
       from ${this.table}`
    );

    // Return the array of users
    return rows;
  }
}

module.exports = PlayerRepository;