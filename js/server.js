const http=require('node:http');
const fs=require('fs')

const hostname = '127.0.0.1';
const port = 4001;
const dataConst=require('./dataGenerate.js')
const dataArray=dataConst()
fs.writeFile('data.txt',JSON.stringify(dataArray),(err)=>{
  if(err){
    console.error('Помилка при записі:',err);
  }else{
    console.log('Дані успішно записано')
  }
})

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
});

const url=reg.url;

if(url==='photo'){
  const data=fs.readFile('data.txt','utf8')
  res.write(data)
  res.end()
}
else{
  res.end('Помилка при записі:',err)
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 