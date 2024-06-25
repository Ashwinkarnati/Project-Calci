const User=require('../models/user');

async function handleGetAllUsers(req,res){
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handleGetUserById(req,res){
    const user= await User.findById(req.params.id);
    if (user) {
      console.log(user.first_name);
      return res.json(user);
    } else {
      return res.status(404).json({ status: 'error', message: 'User not found' });
    }
}

async function handleUpdateById(req,res){
    await User.findByIdAndUpdate(req.params.id,{last_name:'Changed'});
    return res.json({status:'Success'});
}

async function handleDeleteById(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status:'Success'});
}

async function handleCreateNewUser(req,res){
    const body = req.body;
    if(!body || !body.first_name || !body.email || !body.gender || !body.jobTitle){
      return res.status(400).json({ msg:"All fields are required"});
    }
    const result = await User.create({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      gender: body.gender,
      jobTitle: body.jobTitle
    });
    console.log(result);
  
    return res.status(201).json({msg: "success",id: result._id});
}
module.exports ={
    handleGetAllUsers,handleGetUserById,handleUpdateById,handleDeleteById,handleCreateNewUser
}