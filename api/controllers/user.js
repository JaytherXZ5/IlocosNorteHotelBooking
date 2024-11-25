import User from "../models/User.js";

export async function createUser(req, res, next) {
    const newUser = new User(req.body);

    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        next(err);
    }
}
export const deleteUser = async(req,res,next )=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been Deleted");
    }catch(err){
        next(err);
    }
}
export const updateUser = async(req,res,next )=>{
    try{
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,//after updating its gonna return the
            {$set: req.body},// updated data.
            {new : true});
        res.status(200).json(updatedUser);
    }catch(err){
        next(err)
    }
}

export const getUser = async(req,res,next )=>{
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch(err){
        next(err)
    }
}
export const getUsers = async(req,res,next )=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        next(err)
    }
}