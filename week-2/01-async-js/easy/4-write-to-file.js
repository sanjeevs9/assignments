
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const fs= require("fs");
function write(){
    fs.writeFile("C:\\github\\assignments\\week-2\\01-async-js\\new.txt","efknefn","utf-8",function(err,data){
        if(data){
            console.log(data);
        }
    })
}
write();