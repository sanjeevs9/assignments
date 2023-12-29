const  secret=require("../configuration")
const jwt=require("jsonwebtoken")

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
 const token=req.headers.authorization;
    const value=token.split(" ");
    const verified=jwt.verify(value[1],secret);
    if(verified){
        req.username=verified.username;
        next()
    }else{
        res.json({
            msg:"authentication failed"
        })
    }

}

module.exports = userMiddleware;