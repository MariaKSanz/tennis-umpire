const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, read} = require("../../../controllers/playerActions");

// Route to get a list of players
router.get("/", browse);

// Route to get a specific player by id
router.get("/:id", read);


/* ************************************************************************* */

module.exports = router;
