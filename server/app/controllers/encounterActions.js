// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all matches from the database
    const encounters = await tables.encounter.readAll();

    // Respond with the matches in JSON format
    res.json(encounters);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const encounter = await tables.encounter.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (encounter == null) {
      res.sendStatus(404);
    } else {
      res.json(encounter);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// const edit = async (req, res, next) => {
//   try {
//     const match = await tables.match.findById(req.params.id);
//     if (!match) return res.status(404).json({ error: 'Match not found' });
//
//     match.score = req.body.score || match.score;
//     match.winner_id = req.body.winner_id || match.winner_id;
//
//     await match.save();
//     res.json({ message: 'Match updated successfully', match });
//   } catch (err) {
//     next(err);
//   }
// };

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const encounter = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.match.create(encounter);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res) => {
  try {
    // Fetch the userId from the request parameters
    const matchID = req.params.id;

    // Attempt to delete the user from the database
    const rows = await tables.match.destroy(matchID);

    // Check if any rows were affected (meaning the user was deleted)
    if (rows.affectedRows > 0) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    console.error("Error deleting a match:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  destroy,
};
