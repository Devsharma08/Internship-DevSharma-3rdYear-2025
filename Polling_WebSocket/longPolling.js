const http = require('http')

const server = http.createServer(async(req,res)=>{
  res.writeHead(200,{"content-type":"text/plain"})
  if(req.url==='/poll' && req.method==='GET'){
  setTimeout(()=>{
    console.log("req: ",req);
    
    res.write('line 1 running \n')
    res.write('line 2 running \n')
    res.end('get the long awaited output')
  },3000)}
  else{
    res.end(JSON.stringify({msg:"hello mitro"}));
  }

})

server.listen(3000,()=>{
  console.log('server is listening on port 3000...');
  
})