// http tutorial

const http = require('http');

const server = http.createServer((req,res)=>{
  res.writeHead(200,{"content-type":'text/plain'})
  if(req.url==='/' && req.method ==='GET'){
    res.write('hello friends line 1')
    res.write('hello friends line 2')
    res.end('req.end is meet')}
    res.writeHead(200,{"content-type":'text/plain'})
   if(req.url==="/hello"){
    res.write("hello friends")
    res.end("write head last line called")

  }
})

server.listen(3000,()=>{
  console.log('server is listening on port 3000');
})