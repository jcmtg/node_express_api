import express from 'express';

import { createUser, getUsers, getUser, deleteUser, editUser } from '../controllers/users.js';

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
router.get('/', getUsers);
router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', );

export default router;