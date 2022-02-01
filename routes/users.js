import express from 'express';

const router = express.Router(); //init our router. similar to app.get() in index.js

const users = [
	{
		firstName:"John",
		lastName:"Doe",
		age:25
	},
	{
		firstName:"Jane",
		lastName:"Doe",
		age:23
	}
];

// all routes in here are starting with /users
router.get('/', (req, res) => {
	console.log(users);
	res.send(users);
});

router.post('/', (req, res) => {
	const user = req.body;

	users.push(user)


	res.send('post route reach!');
});

export default router;