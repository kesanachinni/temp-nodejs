// console.log(__dirname)
// console.log(__filename)
// setInterval(()=>{
//     console.log('hii chinni')
// },10000)
// const names=require('./1-intro')
// const sayHi=require('./names.js')
// const obj1=require('./module-demo.js')
// require('./names')
// console.log(obj1)
// console.log(names)
 
// sayHi(names.n1)
// sayHi(names.n2)
// sayHi('hell0')

const os=require('os')
const user=os.userInfo()

// console.log(user)
// console.log(`the system uptime is :${os.uptime} s`)
// const currentOs={
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMen:os.freemem()
// }

// console.log(currentOs)

// const path=require('path')
// // console.log(path.sep)
// const filep=path.join('./content','sub','test.txt')
// console.log(filep)
// const base=path.basename(filep)
// console.log(base)
// const absolute=path.resolve(__dirname,'content','sub','test.txt')
// console.log(absolute)

// console.log("start")
// const {readFileSync,writeFileSync, writeFile}=require('fs')
// const first=readFileSync('./content/first.txt', 'utf8')
// const second=readFileSync('./content/second.txt', 'utf8')
// console.log("this is second")
// console.log(first,second)
// writeFileSync('./content/third.txt',`Here is the third file created by ${first},${second}`,{flag:'a'})
// console.log("finall step")
// const fs=require('fs')
// fs.readFileSync
/*

console.log("start")
const {readFile, writeFile}=require('fs')
const { resourceLimits } = require('worker_threads')
readFile('./content/first.txt','utf8',(err, result)=>{
    if(err){
        console.log(err)
        return 
    }
    const first=result
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return 
        }
       
        const second=result
        writeFile('./content/fourth.txt', `Here is the things to be returned ${first} and ${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return;
            }
           console.log('inside blocks')
        }
        )
    })

})
console.log("this is outside the block")
*/

// const http=require('http')
// const server=http.createServer((req,res)=>{
//     console.log(req)
//     res.write("welcome to our home page!")
//     res.end()
// })
// server.listen(5000)

// const http=require('http')
// const server=http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.end('welcome to home page')
//     }
//     if(req.url === '/about'){
//         res.end('here is the about page you are looking for')
//     }
//     res.end(
//         `<h1>Oops!</h1>
//         <p>page not found error</p>
//         <a href="/"> go back to home page</a>`)
// })
// server.listen(5000)
/*
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to home page');
    } else if (req.url === '/about'){
        res.end('Here is the about page you are looking for');
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end(
            `<h1>Oops!</h1>
            <p>Page not found error</p>
            <a href="/">Go back to home page</a>`
        );
    }
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});*/

const _=require('lodash')
const items=[1,[2,[3,[4]]]]

const newitems=_.flattenDeep(items)
console.log(newitems)
