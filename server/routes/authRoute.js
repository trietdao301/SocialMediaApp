const { middleWare } = require("../middleware/Authmiddleware");
const AuthController = require('../controllers/authController');
const router = require('express').Router();

// Define a route for fetching the logged-in user's information
// router.get("/me", protect, UserController.getLoggedInUser);

// router.post('/register', authCtrl.register);

router.post('/login', AuthController.loginControl);
// router.post('/login');
// router.post('/logout', authCtrl.logout);

// router.post('/refresh_token', authCtrl.generateAccessToken);

// router.get('/getme', [authMiddleware.isAuthenticated], authCtrl.getMe);

module.exports = router;
