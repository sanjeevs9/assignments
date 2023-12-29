const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt=require("jsonwebtoken")
const secure=require("../configuration")
const{Admin,Course}=require("../db/index")

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username =req.body.username;
    const password=req.body.password;
   
    Admin.create({
        username,
        password
    }).then(created=>{
        if(created){
            res.json({
                msg:"Admin created"
            })
        }
    })



});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username =req.body.username;
    const password=req.body.password;
  
    Admin.findOne({
        username:username,
        password:password
    }).then(found=>{
        if(found){
           
            const token =jwt.sign({username},secure)
            res.json({
                token
            })
        }else{
          res.json({
                msg:"wrong id-pass"
            })
        }
    })

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const { title, description, price, imageLink } = req.body; 
    Course.findOne({title})
    .then(value=>{
        if(value){
            res.json({
                msg:"title already exist"
            })
        }else{
            Course.create({
                title,
                description,
                price,
                imageLink
            })
            .then(value=>{
                if(value){
                    res.json({
                    message:"course created successfully",
                    courseId:value._id
                })
            }
            })
        }
    })
});


router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response=await Course.find({})
    res.json({
        Course : response
    })
});
module.exports = router;