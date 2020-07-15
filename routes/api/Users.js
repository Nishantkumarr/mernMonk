const express =require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require('bcryptjs')


//to access user model importing it too
const User =require('../../models/User')



//router definiton or description
// @route    GET api/users/test
//@desc      TESTS users route
//@access    Public 

router.get('/test' , (req,res)=>res.json({message: "it gives all the json here that will be used in framing our frontend"}));


//router definiton or description
// @route    Post api/users/
//@desc      register route 
//@access    Public 

router.post('/register',(req,res) =>{
    User.findOne({email:req.body.email})
    .then(user =>{
        if (user){
            return res.status(400).json({email:"This email already been used"})
        }
        else{
            //To get avatar 
            const avatar = gravatar.url(req.body.email,{
                s:'200',
                r:'pg',
                d:'mm',
            });
            
            const newUser = new User({
                name:req.body.name,
                email:req.body.email,                                                               //able to access body keyword as it is declared in server.js 
                avatar,
                password:req.body.password,
                bio:req.body.bio,
            });

            bcrypt.genSalt(10,(err,salt) =>{
                bcrypt.hash(newUser.password,salt,(err,hash) =>{
                    if (err) throw err;
                    newUser.password=hash;
                    newUser.save()
                            .then(user=>(res.json(user)))
                            .catch(err => console.log(err))
                })
            })
        }
    })
});

//router definiton or description
// @route    Post api/users/login
//@desc      login route 
//@access    Public 

router.post('/login',(req,res) =>{
    const email = req.body.email
    const password = req.body.password
    
    User.findOne({email}).then(user=>{

        // Check if user exists or not
        if(!user){
            return res.status(404).json({email :"User not found"});
        }

        //Check Password
        bcrypt.compare(password,user.password).then(
            isMatch =>{
                if(isMatch){
                    res.json({msg:'user found'});
                }
                else{
                    return res.status(400).json({password:'not correct password'});

                }
            }
        )
    })
})






module.exports=router;