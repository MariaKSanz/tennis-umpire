const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, read, add, destroy} = require("../../../controllers/encounterActions");

// Route to get a list of matches
router.get("/", browse);

// Route to get a specific match by id
router.get("/:id", read);

// Route to add a new match
router.post("/", add);

// Route to edit a match
// router.put("/:id", edit);

// Route to delete a match
router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
