const User = require('../models/userModel');
const asyncHandler = require("express-async-handler");

exports.getLoggedInUser = asyncHandler(async (req, res) => {
    console.log(req.query.user + " Controller");
    const { _id, fullname, username, email, password } = await User.findById(req.query.user);
    console.log("welcome" + fullname);
    res.status(200).json({
        id: _id,
        fullname,
        username,
        email,
        password,
    });
});

// module.exports = { getLoggedInUser };