const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const jwtPassword = '123456';

mongoose.connect(
    "mongodb+srv://gupta2004ansh:UrmeS6Tmj6XuGyml@learndb.smgpa.mongodb.net/user_app"
)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Error:', err);
});

const app = express();
app.use(express.json());

const User = mongoose.model('users', new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
}));

app.post('/signin', async function (req, res) {
    const { username, password, name } = req.body;

    try {
        let user = await User.findOne({ username });

        if (!user) {
            // If user does not exist, create and save a new one
            user = new User({ username, name, password });
            await user.save();
            return res.status(201).json({ message: 'User created successfully', user });
        }

        if (user.password !== password) {
            return res.status(403).json({ msg: 'Incorrect password' });
        }

        const token = jwt.sign({ username: user.username }, jwtPassword);
        return res.json({ message: 'User signed in successfully', token });

    } catch (err) {
        console.error('Error:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

const port = 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
