const express = require('express');

const employeeRouter = express.Router();

// Application Level Middleware
employeeRouter.use((req, res, next) => {
    console.log('Employee Router Middleware')
    next();
})

employeeRouter.get('/', (req, res) => {
    res.send('<h1>Employee home page</h1>');
})

employeeRouter.post('/add', (req, res) => {
    res.send('<h1>Add Employee page</h1>');
})

employeeRouter.put('/update', (req, res) => {
    res.send('<h1>Update Employee page</h1>');
})

employeeRouter.delete('/delete', (req, res) => {
    res.send('<h1>Delete Employee page</h1>');
})

employeeRouter.get('/error', (req, res) => {
    throw new Error("This is a forced error from Employee Router.");
    res.send("This will not be executed.");
});

// Error Handling Middleware
employeeRouter.use((err, req, res, next) => {
    //console.error(err.stack);
    console.log("Employee Error Handling Middleware:", err.message);
    res.status(500).send('Something broke!');
});

module.exports = employeeRouter;