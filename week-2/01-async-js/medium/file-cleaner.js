const fs= require('fs')

function read(fn){
    fs.readFile('C:\\github\\assignments\\week-2\\01-async-js\\medium\\a.txt',"utf-8",function(err,data){
        if(err){
            console.log("data not found")
            return
        }
            let content =data;
            content =content.replace(/\s+/g, ' ');
        
        
        fs.writeFile('C:\\github\\assignments\\week-2\\01-async-js\\medium\\a.txt',content,'utf-8',function(err,data){
            if(err){
                console.log("nahh")
                return;
            }
            fn(content);
        });
        
        
    })
   
    
}
function set(data){
    console.log(data);
}
read(set);
