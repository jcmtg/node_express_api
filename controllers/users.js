import { v4 as uuidv4 } from 'uuid';

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

export const updateUser = (req, res) => {
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
}

export const deleteUser = (req, res) => {
	const { id } = req.params;
	users = users.filter((user) => user.id != id);
	res.send(`User with the id ${id} deleted from the db.`);
}

export const getUser = (req, res) => {
	const { id } = req.params;
	console.log(id);
	const foundUser = users.find((user) => user.id == id);
	res.send(foundUser);
}

export const getUsers = (req, res) => {
	console.log(users);
	res.send(users);
}

export const createUser = (req, res) => {
	const user = req.body;
	const userId = uuidv4();
	user.id = userId;
	users.push(user);

	res.send(`User with the name ${user.firstName} added to the db.`);
}

