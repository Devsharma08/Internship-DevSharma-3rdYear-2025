const http = require('http')

const server = http.createServer((req,res)=>{
  if(req.url ==='/event'){

    res.writeHead(200,{
      "content-type":'text/event-stream',
      'cache-control':'no-cache',
      'connection':'keep-alive'
    })
    var count = 0

    const interval = setInterval(()=>{
      count++;
      res.write(`this is server sen\'t events and ${count} `);
    },2000)

    req.on('close',()=>{
    clearInterval(interval);
    res.end();
    console.log('server is closed');
  })
  } else{
    res.writeHead(200,{"content-type":"text/plain"});
    res.end('server is up')
  }
})

server.listen(3000,()=>{
  console.log('server is listening on port 3000...');
  
})