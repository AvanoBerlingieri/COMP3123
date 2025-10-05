const express = require('express');
const fs = require('fs');
const path = require('path');

const routerUser = express.Router();

/*
- Return all details from user.json file to client as JSON format
*/
routerUser.get('/profile', (req, res, next) => {
    fs.readFile(path.join(__dirname, '../user.json'),(err, data) => {
        if (err) return next(err);
        res.json(JSON.parse(data));
    });
});

/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  password is valid then send response as below
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If password is invalid then send response as below
    {
        status: false,
        message: "Password is invalid"
    }
*/
routerUser.post('/login', (req, res, next) => {
    const {username, password} = req.body;

    fs.readFile(path.join(__dirname, '../user.json'), 'utf8', (err, data) => {
        if (err) return next(err);

        const user = JSON.parse(data);

        if (user.username !== username) {
            return res.json({status: false, message: 'User Name is invalid'});
        }

        if (user.password !== password) {
            return res.json({status: false, message: 'Password is invalid'});
        }

        res.json({status: true, message: 'User Is valid'});
    });
});

/*
- Modify /logout route to accept username as parameter and display a message
    in HTML format like <b>${username} successfully logout.<b>
*/
routerUser.get('/logout/:username', (req, res) => {
    const {username} = req.params;
    res.send(`<b>${username} successfully logged out.<b>`);
});

module.exports = routerUser;