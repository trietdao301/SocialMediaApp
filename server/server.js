require('dotenv').config();
const express = require("express");
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const User = require('./models/userModel');
const config = require("./config");
const URI = config.MONGODB_URL;
const { protect } = require('./middleware/Authmiddleware.js');
const UserController = require('./controllers/userController');
const cors = require('cors');
app.use(cors());
const bodyparser = require('body-parser')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
mongoose.connect(URI,).then(() => {
    console.log('Connected to MongoDB!');
})
    .catch((err) => {
        console.error('MongoDB connection error=', err);
        process.exit(1);
    });

// const newUser = new User({
//     fullname= 'John Doe',
//     username= 'john_doe',
//     email= 'john@example.com',
//     password= 'hashed_password', // In a real-world scenario, you'd hash the password before storing it
// });
// newUser.save();


app.get("/", function (req, res) {
    res.send("Hello World!");
});

// const jwt = require('jsonwebtoken');

// const payload = {

//     // _id: '65cc4ec724d3de6fc18aa156',
//     // fullname: "triet",
//     username: "siva",
//     // email: "trietdao301@gmai.com",
//     password: "warcraft301",
//     // __v: 0
// };
// const token = jwt.sign(payload, '2f65cc8f811d49c49a9033fba19147fb0f0210644ad4f649c06e93f64d6d3f7d');

//Front End needs a token that is decrypted by an object (containing email,password) and secret key. (to change specifications go to server middleware)
// Routes (set path API and will redirect to specific API in Controller)
app.use('/api/auth', require('./routes/authRoute'));


app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});