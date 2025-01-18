const fs=require("fs");
fs.readdir("folder1",(err,files)=>{//deleting folder ,if you directly delete folder which has files you get error to delete folder with files first we need to delete files inside it and delte the folder
    if(err){
        console.log(err);
    }
    else{
        for(let pp of files){
            fs.unlink("./folder1/"+pp,(err)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log("deleted");

                }
            });
        }
    }
});
fs.rmdir("folder1",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("deleted folder");
    }
});