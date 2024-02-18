const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");

const middleWare = asyncHandler(async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            //console.log(req.headers.authorization);
            // get token from header
            token = req.headers.authorization.split(" ")[1];
            //console.log(process.env.JWT_SECRET);
            // verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET); // token = payload + JWT, payload = user info object

            // get user from the token
            req.query.user = await User.findOne({ email: decoded.email, password: decoded.password });
            console.log(req.query.user);
            next();
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error("Not Authorized");
        }
    }
    if (!token) {
        res.status(401);
        throw new Error("Not Authorized, no token");
    }
});

module.exports = { middleWare };
