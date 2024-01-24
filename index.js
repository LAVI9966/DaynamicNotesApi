const fs = require('fs')
const http = require('http')
const requests = require('requests')
const homepage = fs.readFileSync('index.js','utf-8')

const api = "https://type.fit/api/quotes"
const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        try{
            let data = fetch(api);
            let realdata = data.json();
            console.log(realdata)
        }catch (err){
        console.log(err)
    }
}
})

server.listen(3000,'127.0.0.1');