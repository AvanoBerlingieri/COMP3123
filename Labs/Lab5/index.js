const express = require('express');
const studentRouter = require('./routers/student')
const employeeRouter = require('./routers/employee');

const app = express();
const SERVER_PORT = process.env.POST || 3000;

// Application Level Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().getTime()}`);
    next();
})

app.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next();
})

// Student and Employee routers
app.use("/api/v1/student", studentRouter);
app.use("/api/v1/employee", employeeRouter);

// http://localhost:3000/
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.get('/error', (req, res) => {
    res.send("Before error");
    throw new Error("This is an error!");
    res.send("This will not execute");
});

// Error Handling Middleware
app.use((err,req, res, next) => {
    // console.error(err.stack);
    console.log("Error Handling Middleware:", err.message);
    res.status(500).send("Something Broke!");
});

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});