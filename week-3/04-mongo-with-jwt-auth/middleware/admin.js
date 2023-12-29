const  secret=require("../configuration")
const jwt=require("jsonwebtoken")
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const token=req.headers.authorization;

    const value=token.split(" ");
   
    const verified=jwt.verify(value[1],secret);
    if(verified){
        next()
    }else{
        res.json({
            msg:"authentication failed"
        })
    }
}

module.exports = adminMiddleware;