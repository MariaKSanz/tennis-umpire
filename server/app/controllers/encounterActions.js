// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all encounters from the database
    const encounters = await tables.encounter.readAll();

    // Respond with the encounters in JSON format
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
//     const encounter = await tables.encounter.findById(req.params.id);
//     if (!encounter) return res.status(404).json({ error: 'Match not found' });
//
//     encounter.score = req.body.score || encounter.score;
//     encounter.winner_id = req.body.winner_id || encounter.winner_id;
//
//     await encounter.save();
//     res.json({ message: 'Match updated successfully', encounter });
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
    const insertId = await tables.encounter.create(encounter);

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
    const encounterID = req.params.id;

    // Attempt to delete the user from the database
    const rows = await tables.encounter.destroy(encounterID);

    // Check if any rows were affected (meaning the user was deleted)
    if (rows.affectedRows > 0) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
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
