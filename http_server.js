const http = require("http");
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("this is kavya");
        res.end();
    }
    else{
        res.write("another domain");
        res.end();
    }
});
server.listen("3000");