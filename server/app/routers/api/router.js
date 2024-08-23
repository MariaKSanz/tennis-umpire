const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const encountersRouter = require("./encounters/router");

router.use("/encounters", encountersRouter);

/* ************************************************************************* */

module.exports = router;
