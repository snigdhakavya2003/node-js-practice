const fs=require("fs");
fs.mkdir("folder1",(err)=>{//creating file inside folder
    if(err){
        console.log(err);
    }
    else {
        fs.writeFile("./folder1/a.txt","hello",(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("creted file");
            }
        });
        fs.writeFile("./folder1/b.txt","123",(err)=>{

            if(err){
                console.log(err);
            }
            else{
                console.log("created another file");
            }
        });
        
    }
});