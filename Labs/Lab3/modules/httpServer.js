import * as http from "node:http";
import {getStudent} from "./student";

const SERVER_PORT = 3000;
const SERVER_HOST = 'localhost';

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    if (req.url === '/') {
        res.status(200);
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Hello World!</h1>');
    }else if (req.url === '/about') {
        res.status(200);
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>About Me!</h1>');
    }else if (req.url === '/student') {
            res.status(200);
            res.setHeader('Content-Type', 'application/json');
            const studentList = getStudent();
            console.log(JSON.stringify(studentList));
    }else {
        res.status(404);
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>404! Page Not Found!</h1>');
    }
})