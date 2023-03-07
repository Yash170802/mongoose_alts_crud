import express from "express";

import { addUser,getUsers,getUser,editUser,deleteUser } from  '../controller/user_controlller.js';
// import { Route } from "react-router-dom";

const router = express.Router();

// Add Data.................
router.post('/add', addUser);

// * Get All User Show * //
router.get('/all', getUsers);

// * Set Data * //
router.get('/:id', getUser);

// * Edit Data * //
router.put('/:id', editUser);

// * Delete * //
router.delete('/:id', deleteUser);

export default router;