const { protect } = require("../middleware/Authmiddleware");
const UserController = require('../controllers/userController');
const router = require('express').Router();

// Define a route for fetching the logged-in user's information
router.get("/me", protect, UserController.getLoggedInUser);

module.exports = router;
