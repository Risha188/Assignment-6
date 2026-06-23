const http = require('http');
const fs = require('fs');

const app = http.createServer((req,res)=>{
    const {url} = req;
    
    if(url === '/styles.css') {
        fs.readFile('./public/styles.css',(err,data) => {
            if(err) {
                res.writeHead(500,{'content-type': 'text/plain'});
                return res.end('<h1>Server Error</h1>');
            }
            res.writeHead(200,{'content-type': 'text/css'});
            res.end(data);
        })
    }else if(url === '/home'){
        fs.readFile('./pages/home.html', (err, data)=>{
            if(err) {
                res.writeHead(500,{'content-type': 'text/html'});
                return res.end('<h1>Server Error</h1>');
            }
            res.writeHead(200,{'content-type': 'text/html'});
            res.end(data);
        })
    }else if(url.toLowerCase() === '/about'){
        fs.readFile('./pages/about.html',(err,data) => {
            if(err) {
                res.writeHead(500,{'content-type': 'text/html'});
                return res.end('<h1>Server Error</h1>');
            } 
            res.writeHead(200,{'content-type': 'text/html'});
            res.end(data);
        })
    } else if(url.toLowerCase() === '/contact'){
        fs.readFile('./pages/contact.html',(err,data) => {
            if(err){
                res.writeHead(500,{'content-type':'text/html'});
                return res.end('<h1>Server Error</h1>');
            }
            res.writeHead(200,{'content-type': 'text/html'});   
            res.end(data);
        })
    }else if(url.toLowerCase() === '/services'){
        fs.readFile('./pages/services.html',(err,data) => {
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