const express = require('express');

const router= express.Router();
const {handleGetAllUsers,handleGetUserById,handleUpdateById,handleDeleteById,handleCreateNewUser}= require('../controllers/user');
    // Route to get all users
  router.route('/')
  .get(handleGetAllUsers)
  .post(handleCreateNewUser);

  // Route to get a user by ID
  router
  .route("/:id")
  .get(handleGetUserById)
  .delete(handleDeleteById)
  .patch(handleUpdateById);
  
  module.exports = router;