import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router(); //init our router. similar to app.get() in index.js

const users = [
	{
		id:0,
		firstName:"John",
		lastName:"Doe",
		age:25
	},
	{
		id:1,
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
	const userId = uuidv4();
	user.id = userId;
	users.push(user)

	res.send(`User with the name ${user.firstName} added to the db.`);
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
console.log(id);
	const foundUser = users.find((user) => user.id == id);
	res.send(foundUser);
});

export default router;