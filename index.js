// note - if in package.json file have type:"common js"then we can use require and if it have type:"module"the we will import file using import not require.default type is common js.

// const {addToCart, changeqty, name} = require("./cartModule");
// console.log(addToCart());
// console.log(changeqty());
// console.log(name);

// console.log("krutika vyas");
// let a = 10;
// const b = 40;
// var c = 50;
// a = 50;  
// console.log(a+b+c); 
// const app = require('./app')
// console.log(app.x);

// there are 3 types of modules in node js-
// 1.core modules (built in modules provdesd by node js)such as fs,http,path,etc
// 2. local modules(created by developers)
// 3.third party module(we have to installed it)such as npm(node package manager)

// modules can also be classified into global(which do not need to import like console) and non global(like fs)
// const fs = require('fs');
// fs.writeFileSync("hello.txt","hello world")
// console.log(__filename);
// console.log(__dirname);
// const http = require("http");
// function dataControl(req,resp)
// {
//     resp.write("<h1>hello my name is krutika vyas</h1>");
//     resp.end(); 
// }
// http.createServer(datacontrol).listen(4500);

let http = require("http")
let server = http.createServer((req,res)=>{
    if(req.url=="/news"){  //http://localhost:8000/news
        let obj={
            status:1,
            data:[
                {
                    newsTitle:"WS",
                    newsDes:"WS  hello"
                },
                {
                    newsTitle:"IIP",
                    newsDes:"IIP hello"
                }
            ]
        }
        res.end(JSON.stringify(obj));
    }
    if(req.url=="/about"){   //http://localhost:8000/about
        status:1
    }
    if(req.url=="/course"){    //http://localhost:8000/course

    }
    if(req.url=="/"){             //http://localhost:8000/
        res.end("welcome to vscode")
    }
res.end("welcome to vscode") 
})
server.listen("8000")//http://localhost:8000