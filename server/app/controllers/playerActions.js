// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all matches from the database
    const players = await tables.player.readAll();

    // Respond with the matches in JSON format
    res.json(players);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const player = await tables.player.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (player == null) {
      res.sendStatus(404);
    } else {
      res.json(player);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read
};
