const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const encountersRouter = require("./encounters/router");
const playersRouter = require("./players/router");

router.use("/encounters", encountersRouter);
router.use("/players", playersRouter);

/* ************************************************************************* */

module.exports = router;
