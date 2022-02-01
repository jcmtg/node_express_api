import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express(); //the entire app is in here.
const PORT = 5000;

// app.use(bodyParser.json()); //Each app.use(middleware) is called every time a request is sent to the server.
app.use(express.json()); //use express's body-parser

app.use('/users', usersRoutes);
//first route
app.get('/', (req, res) => res.send('Hello from homepage.')); //GET request to the root/hoempage., 2nd param is the callback func
// we don't want to add routes here ^

// what our api is going to do:
//GET /users
//POST /users
//GET /users/:id
//DELETE /users/:id
//PATCH /users/:id

app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`));  //ctrl+c to stop the server (in terminal)

// ran node install --save-dev nodeMon, this only puts it locally.

// run npm start
// if you make a change, then nodemon captures this and restarts.