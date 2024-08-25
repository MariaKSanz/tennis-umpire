const AbstractRepository = require("./AbstractRepository");

class EncounterRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "user" as configuration
    super({ table: "encounter" });
  }

  // The C of CRUD - Create operation

  async create(encounter) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await this.database.query(
      `insert into ${this.table} (played_at, tournament, player_1_id, player_2_id, score, winner_id) values (?, ?, ?, ?, ?, ?)`,
      [
        encounter.played_at,
        encounter.tournament,
        encounter.player_1_id,
        encounter.player_2_id,
        encounter.score,
        encounter.winner_id,
      ]
    );

    if (result) {
      return this.read(result.insertId);
    }

    return null;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      `SELECT e.id,
              played_at    AS 'playedAt',
              tournament,
              score,
              p1.firstname AS 'p1Firstname',
              p1.lastname  AS 'p1Lastname',
              p2.firstname AS 'p2Firstname',
              p2.lastname  AS 'p2Lastname',
              w.firstname  AS 'wFirstname',
              w.lastname   AS 'wLastname'
       FROM ${this.table} AS e
                INNER JOIN player p1 ON e.player_1_id = p1.id
                INNER JOIN player p2 ON e.player_2_id = p2.id
                INNER JOIN player w ON e.winner_id = w.id
       WHERE e.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "user" table
    const [rows] = await this.database.query(`
        SELECT e.id,
               played_at    AS 'playedAt',
               tournament,
               score,
               p1.firstname AS 'p1Firstname',
               p1.lastname  AS 'p1Lastname',
               p2.firstname AS 'p2Firstname',
               p2.lastname  AS 'p2Lastname',
               w.firstname AS 'wFirstname',
               w.lastname  AS 'wLastname'
        FROM ${this.table} AS e
                 INNER JOIN player p1 ON e.player_1_id = p1.id
                 INNER JOIN player p2 ON e.player_2_id = p2.id
                 INNER JOIN player w ON e.winner_id = w.id
    `);

    // Return the array of users
    return rows;
  }

  // The U of CRUD - Update operation

  async update(id, encounter) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET played_at=?, tournament=?, player_1_id=?, player_2_id=?, score=?, winner_id=? WHERE id=?`,
      [
        encounter.played_at,
        encounter.tournament,
        encounter.player_1_id,
        encounter.player_2_id,
        encounter.score,
        encounter.winner_id,
        id,
      ]
    );

    if (result) {
      return this.read(id);
    }

    return null;
  }

  // The D of CRUD - Delete operation

  async destroy(id) {
    // Execute the SQL SELECT query to retrieve all users from the "user" table
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );
    return rows;
  }
}

module.exports = EncounterRepository;
