const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = express.Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password = req.body.password;

    Admin.findOne({username:username})
    .then(value=>{
    if(value){
        res.json({
            msg:"user already exist"
        })
    }else{
        Admin.create({ username,password})
        .then(created=>{
            if(created){
            res.json({
                msg:"Admin created"
            })
           
        }
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