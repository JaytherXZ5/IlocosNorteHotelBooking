import express from "express";
import { createUser,
    updateUser,
    deleteUser,
    getUser,
    getUsers 
} from "../controllers/user.js";  
import { verifyToken, verifyUser, verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

//for api request postman testing
//everytime we request from this endpoint its gonna verify our token 
router.get("/checkauthentication", verifyToken, (req, res,next)=>{
    res.send("hello user, you are logged in!");
});

router.get("/checkuser/:id",verifyUser , (req, res,next)=>{
    res.send("hello user, you are logged in and you can delete your account!");
});

router.get("/checkadmin/:id",verifyAdmin, (req,res,next)=>{
    res.send("Hello admin, and you can delete all accounts");
})

router.post("/",createUser);

//UPDATE
router.put("/:id",verifyUser,updateUser);
//DELETE
router.delete("/:id",verifyUser, deleteUser);
//GET
router.get("/:id",verifyUser,getUser);
//GET ALL
router.get("/",verifyAdmin, getUsers);

export default router;