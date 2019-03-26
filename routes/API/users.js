const express = require('express');
const router = express.Router();

// Load User model
const User = require("../../models/User")
// @route Get api/users/test
// @desc Tests users route 
//  @access Public 
router.get('/test',(req,res) => res.json({msg:"User Works"}));
//  @route Get api/users/register
// @desc Register user
// @access Public
router.post('/register',(req,res) =>{
    User.findOne()
})
module.exports = router;
