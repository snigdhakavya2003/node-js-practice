const fs=require("fs");
fs.writeFile("example.txt","hello",(err)=>{//writing into file
    if(err){
        console.log(err);
    }
    else{
        console.log("created");
        fs.readFile("example.txt","utf8",(err,file)=>{//reading into file
            if(err){
                console.log(err);
            }
            else{
                console.log(file);
            }

        });
        
    }
});
fs.rename("example.txt","example2.txt",(err)=>{//renaming into file
    if(err){
        console.log(err);
    }
    else{
        console.log("renamed");
    }
});
fs.appendFile("example2.txt","this is added",(err)=>{//appending content in file
    if(err){
        console.log(err);
    }
    else{
        console.log("appended");
        fs.readFile("example2.txt","utf8",(err,file)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(file);
            }
        });
    }
});
fs.unlink("example2.txt",(err)=>{//deleting a file
    if(err){
        console.log(err);
    }
    else{
        console.log("deleted");
    }
});