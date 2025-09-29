const express = require('express');
const SERVER_PORT = process.env.PORT || 3000;

//Create an instance of an express application
const app = express();

// Middleware to server static files from the public directory
// app.use(express.static('public'));
app.use('/static',express.static('public'));
app.use(express.json()); // middleware to parse JSON body
app.use(express.urlencoded({ extended: true })); // middleware to parse URL-encoded bodies


//http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello world from express');
})

// http://localhost:3000/index.html
// app.get('/index.html', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// })

// Query Parameters
// http://localhost:3000/student?name=John&age=25
// req.query
app.get('/student', (req, res) => {
    if (req.query == {} || !req.query.name || !req.query.age){
        return res.status(400).send('Missing query parameters');
    }
    console.log(req.query);
    // const {name, age} = req.query;
    const name = req.query.name;
    const age = req.query.age;

    res.json({
        Student_name: name,
        Student_age: age
    });
})

// Path Parameters
// http://localhost:3000/student/John/25/Toronto
// req.params
app.get('/student/:name/:age/:city', (req, res) => {
    console.log(req.params);
    if (req.params == {} || !req.params.name || !req.params.age || !req.params.city){
        return res.status(400).json({error: 'Missing query parameters'});
    }
    // const {name, age, city} = req.params;
    const name = req.params.name;
    const age = req.params.age;
    const city = req.params.city;

    res.json({
        Student_name: name,
        Student_age: age,
        Student_city: city
    });
})

// Body Parameters as JSON
// req.body
/*
* {
*   "name": "John",
*   "age": 25
*
* }
*
* */
app.post('/student', (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({ error: 'Missing body parameters' });
    }

    console.log(req.body);

    res.json({
        Student_name: name,
        Student_age: age
    });
});

//#2
// A GET request to /user with query parameters for firstname and lastname.
app.get('/user', (req, res) => {
    const { firstname, lastname } = req.query; // all lowercase

    if (!firstname || !lastname) {
        return res.status(400).json({ error: 'Missing query parameters' });
    }

    res.json({
        firstname: firstname,
        lastname: lastname
    });
});

//#3
// A POST request to /user with path parameters for firstname and lastname.
app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params; // match route names exactly

    if (!firstname || !lastname) {
        return res.status(400).json({ error: 'Missing path parameters' });
    }

    res.json({
        firstname: firstname,
        lastname: lastname
    });
});

//#4
// A POST request to /users with body parameter for array of users firstname and lastname.
app.post('/users', (req, res) => {
    const users = req.body;

    if (!Array.isArray(users) || users.length === 0) {
        return res.status(400).json({ error: 'Missing or invalid users array in body' });
    }

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (!user.firstname || !user.lastname) {
            return res.status(400).json({ error: `A User is missing firstname or lastname` });
        }
    }

    res.json(users);
});

//http://localhost:3000/hello
app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS</h1>");
})

//http://localhost:3000/about
app.get("/about", (req, res) => {
    // res.send("<h1>About page</h1>");
    // res.writeHead(200, {'Content-Type': 'text/html'})
    res.status(200).send("<h1>About page</h1>");
})

//http://localhost:3000/college
app.get("/college", (req, res) => {
    const College= {
        method: "GET",
        name: "George Brown College",
        location: "Toronto, Canada",
        established: 1967
    }
    //res.send(College);
    res.json(College);
})

//http://localhost:3000/college
app.post("/college", (req, res) => {
    const College= {
        method: "POST",
        name: "George Brown College",
        location: "Toronto, Canada",
        established: 1967
    }
    //res.send(College);
    res.json(College);
})

//http://localhost:3000/college
app.put("/college", (req, res) => {
    const College= {
        method: "PUT",
        name: "George Brown College",
        location: "Toronto, Canada",
        established: 1967
    }
    //res.send(College);
    res.json(College);
})

//http://localhost:3000/college
app.delete("/college", (req, res) => {
    const College= {
        method: "DELETE",
        name: "George Brown College",
        location: "Toronto, Canada",
        established: 1967
    }
    //res.send(College);
    res.json(College);
})

app.listen(SERVER_PORT, () => {
    console.log("Server is running on port " + SERVER_PORT);
    //console.log(`Server is started`);
})