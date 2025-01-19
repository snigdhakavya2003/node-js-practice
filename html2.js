const fs=require("fs");
const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url==="/image"){//when you type http://localhost:3000/image this comes
        res.writeHead(200,{"content-type":"image/jpeg"});
        fs.ReadStream("./pandu2.0.jpeg").pipe(res);
    }
    else if(req.url==="/json"){//when you type http://localhost:3000/json this comes
        res.writeHead(200,{"content-type":"application/json"});
        fs.ReadStream("./index.json").pipe(res);
    }
    else{
        res.writeHead(200,{"content-type":"text/html"});//when you type anything other  than /json or /image you get this
        fs.ReadStream("./index.html").pipe(res);
    }
}).listen("3000");