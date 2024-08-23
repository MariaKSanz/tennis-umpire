const AbstractRepository = require("./AbstractRepository");

class PlayerRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "player" as configuration
    super({table: "player"});
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific player by its ID
    const [rows] = await this.database.query(
      `select *
       from ${this.table}
       where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the player
    return rows[0];
  }


  async readAll() {
    // Execute the SQL SELECT query to retrieve all players from the "player" table
    const [rows] = await this.database.query(
      `select *
       from ${this.table}`
    );

    // Return the array of players
    return rows;
  }
}

module.exports = PlayerRepository;