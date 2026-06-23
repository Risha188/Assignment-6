const http = require('http');
const fs = require('fs');

const app = http.createServer((req,res)=>{
    const {url} = req;
    
    if(url === '/styles.css') {
        fs.readFile('./publish/styles.css',(err,data) => {
            if(err) {
                res.writeHead(500,{'content-type': 'text/plain'});
                return res.end('<h1>Server Error</h1>');
            }
            res.writeHead(200,{'content-type': 'text/css'});
            res.end(data);
        })
    }else if(url === '/home'){
        fs.readFile('./publish/index.html', (err, data)=>{
            if(err) {
                res.writeHead(500,{'content-type': 'text/html'});
                return res.end('<h1>Server Error</h1>');
            }
            res.writeHead(200,{'content-type': 'text/html'});
            res.end(data);
        })
    }else if(url.toLowerCase() === '/about'){
        fs.readFile('./publish/about.html',(err,data) => {
            if(err) {
                res.writeHead(500,{'content-type': 'text/html'});
                return res.end('<h1>Server Error</h1>');
            } 
            res.writeHead(200,{'content-type': 'text/html'});
            res.end(data);
        })
    } else if(url.toLowerCase() === '/contact'){
        fs.readFile('./publish/contact.html',(err,data) => {
            if(err){
                res.writeHead(500,{'content-type':'text/html'});
                return res.end('<h1>Server Error</h1>');
            }
            res.writeHead(200,{'content-type': 'text/html'});   
            res.end(data);
        })
    }else if(url.toLowerCase() === '/services'){
        fs.readFile('./publish/services.html',(err,data) => {
            if(err) {
                res.writeHead(500,{'content-type': 'text/html'});
                return res.end('<h1>Server Error</h1>');
            }
            res.writeHead(200,{'content-type': 'text/html'});
            res.end(data);
        })
    }else{
        res.writeHead(404,{'content-type':'text/html'});
        res.end('<h2>Page is not found</h2>')
    }
})

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is up and running at http://localhost:${PORT}`)
})