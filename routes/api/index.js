const router = require("express").Router();
const userRoutes = require("./userRoutes");
const todoRoutes = require("./todoRoutes");
const weightRoutes = require("./weightRoutes");
const destinationRoutes = require("./destinationRoutes");

router.use("/users", userRoutes);
router.use("/todos", todoRoutes);

module.exports = router;
