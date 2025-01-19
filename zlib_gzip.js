const fs=require("fs");
const zlib=require("zlib");
const gzip=zlib.createGzip();
const gunzip=zlib.createGunzip();
const read =fs.createReadStream("./example.txt","utf8");// long way to write data into write stream
const writes =fs.createWriteStream("example2.txt.gz");
//read.on("data",(chunky)=>{
  //  writes.write(chunky);
  // console.log(chunky);
//});
//short way to write into write stream
//read.pipe(writes);//writes data in example.txt to example2.txt
//we are using zlib to compress and manipulate the read stream file data and send it to write stream
read.pipe(gzip).pipe(writes);//what we done here is we uased gzip to compress data and manipulate data from read stream and gave it to write stream
//note writestream type should be .gz 
//unzip file from read and send unziped file to write stream
//note to work this read file type should be .gz 
writes.on("finish",()=>{
    const read1=fs.createReadStream("./example2.txt.gz");
    const write1=fs.createWriteStream("uncomp.txt");
    read1.pipe(gunzip).pipe(write1);
});

