const express =require("express")

const router = express.Router();

//router definiton or description
// @route    GET api/users/test
//@desc      TESTS users route
//@access    Public 

router.get('/test' , (req,res)=>res.json({message: "it gives all the json here that will be used in framing our frontend"}))

module.exports=router;