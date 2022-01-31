import express from 'express';
import bodyParser from 'body-parser';

const app = express(); //the entire app is in here.
const PORT = 5000;

//app.use(bodyParser.json()); //Each app.use(middleware) is called every time a request is sent to the server.
app.use(express.json()); //use express's body-parser