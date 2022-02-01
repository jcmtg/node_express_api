import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router(); //init our router. similar to app.get() in index.js

let users = [
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

const createUser = (req, res) => {
	const user = req.body;
	const userId = uuidv4();
	user.id = userId;
	users.push(user)

	res.send(`User with the name ${user.firstName} added to the db.`);
};


router.post('/', createUser);

router.get('/:id', (req, res) => {
	const { id } = req.params;
	console.log(id);
	const foundUser = users.find((user) => user.id == id);
	res.send(foundUser);
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	users = users.filter((user) => user.id != id);
	res.send(`User with the id ${id} deleted from the db.`);
});

router.patch('/:id', (req, res) => {
	const { id } = req.params;
	const { firstName, lastName, age } = req.body;
	
	const user = users.find((user) => user.id == id);

	if(firstName)
	{
		user.firstName = firstName;
	}
	if(lastName)
	{
		user.lastName = lastName;
	}
	if(age)
	{
		user.age = age;
	}


	
	

	res.send(`User with the id ${id} has been updated.`);
	 
});

export default router;