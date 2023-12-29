const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://sanjeev:VH2cYQkXF178eBsE@cluster0.v8nr0x6.mongodb.net/user_app');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:"String",
    password:"String"

});
const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:"String",
    password:"String",
    purchasedCourse:[{
        type:mongoose.Schema.ObjectId,
        ref : 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: Number,
    imageLink: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}