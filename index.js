import express from 'express';
import bodyParser from 'body-parser';

const app = express(); //the entire app is in here.
const PORT = 5000;

// app.use(bodyParser.json()); //Each app.use(middleware) is called every time a request is sent to the server.
app.use(express.json()); //use express's body-parser

//first route
app.get('/', (req, res) => {
	console.log('[TEST]!');
	res.send('Hello from homepage.');

}); //GET request to the root/hoempage., 2nd param is the callback func

app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`));  //ctrl+c to stop the server (in terminal)

// ran node install --save-dev nodeMon, this only puts it locally.

// run npm start
// if you make a change, then nodemon captures this and restarts.