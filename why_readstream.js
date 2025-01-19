const fs =require("fs");
const readstr=fs.createReadStream("./example.txt","utf8");
readstr.on("data",(chunk)=>{
    console.log(chunk);
});//readstream loads large file without error if you use fs.reaFile() it shows error for large fileloading when you have large files use readstream.