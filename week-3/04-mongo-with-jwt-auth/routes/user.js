const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt= require("jsonwebtoken");
const{User,Course}=require("../db/index")
const secure=require("../configuration")

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username=req.body.username;
    const password=req.body.password;
    try{
    User.create({
        username,
        password
    }).then(created=>{
        if(created){
            res.json({
                message:"user created successfully"
            })
        }
    })
}catch(err){
    res.json({
        msg:"error"
    })
}

});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    
    User.findOne({
        username,
        password
    }).then(finded=>{
        if(finded){
            const token=jwt.sign({username},secure)
            res.json({
                token
            })
        }else{
            res.json({
                msg:"user not found"
            })
        }
        })
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const response=await Course.find({})
    res.json({
        Course:response
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const id=req.params.courseId
    const username=req.username;
    User.updateOne(
        {username:username},
        {"$push":{purchasedCourse:id}}
    ).catch(function(e){
        console.log(e)
    })
    res.json({
        "msg":"course purchased successfully"
    })
   
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username=req.username;
    const user = await User.findOne({username})
    const course = await Course.find({
        _id:{"$in":user.purchasedCourse}
    })
    res.json({
        course:course
    })

});

module.exports = router