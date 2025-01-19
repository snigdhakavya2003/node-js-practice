const fs=require("fs");
fs.writeFile("example.txt","pandu  pandu hekkl sjjajaka anamskds djdkjjd",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("written");
    }
});
const read =fs.createReadStream("./example.txt","utf8");
const writes =fs.createWriteStream("example2.txt");
read.on("data",(chunk)=>{
    writes.write(chunk);
    console.log(chunk);
});