const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course}= require("../db");
const { type } = require("os");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username=req.body.username;
    const password = req.body.password;

    User.findOne({username:username})
    .then(value=>{
        if(value){
            res.json({
                msg:"user already exist"
            })
        }else{
            User.create({
              username,
               password
            }).then(created=>{
                if(created){
                    res.json({
                        msg:"user created successfully"
                    })
                  
                }
            })
        }
    })

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response=await Course.find({})
    res.json({
        Course : response
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const id=req.params.courseId;
    const username=req.headers.username;
    User.updateOne(
        {username:username},
        {"$push":{purchasedCourse:id}}
        ).catch(function(e){
            console.log(e)
        })
        res.json({
            "msg":"course purchased successfully"
        })
})

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
   const user=await User.findOne({
    username:username
   })
   console.log(user.purchasedCourse)
   const courses=await Course.find({
   _id:{
        "$in":user.purchasedCourse
    }
   })
   res.json({
    Course:courses
   })
   
});

module.exports = router
