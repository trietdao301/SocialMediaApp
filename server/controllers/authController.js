const User = require('../models/userModel');
const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.loginControl = asyncHandler(async (req, res) => {

    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    const user = await User.findOne({ email: email });

    if (!user)
        return res.status(404).send({ msg: "Email does not exist!" });

    // const checkPassword = bcrypt.compareSync(password, user.password);
    let checkPassword
    password === user.password ? checkPassword = true : checkPassword = false
    if (checkPassword === false)
        return res.status(404).send({ msg: "Password does not match!" });

    const access_token = getAccessToken({ email: user.email, password: user.password });

    res.status(200).json({
        token: access_token,
        username: user.username,
        email: user.email,
        msg: "Login successfully!!",
    });
});

const getAccessToken = payload => {

    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1d"
    });
}
// module.exports = { getLoggedInUser };