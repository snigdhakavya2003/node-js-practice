const fs=require("fs");
fs.writeFile("example.txt","pandu  pandu hekkl sjjajaka anamskds djdkjjd",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("written");
    }
});
const read =fs.createReadStream("./example.txt","utf8");// long way to write data into write stream
const writes =fs.createWriteStream("example2.txt");
//read.on("data",(chunky)=>{
  //  writes.write(chunky);
  // console.log(chunky);
//});
//short way to write into write stream
read.pipe(writes);//writes data in example.txt to example2.txt
