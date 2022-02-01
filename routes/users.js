import express from 'express';

const router = express.Router(); //init our router. similar to app.get() in index.js

// all routes in here are starting with /users
router.get('/', (req, res) => {
	res.send('Hello, in uers.js');
});

export default router;