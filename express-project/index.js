let express = require("express");
let app=express();
app.use(express.json());                     //inbuilt middleware
// let myToken ="12345"
// let mypass="1234567"

// let checkToken=(req,res,next)=>{                 
//     if(res.query.tokens==""||req.query==undefined){
//         return res.send(
//             {
//                 status:0,
//                 msg:"please fill the token"
//             }
//         )
//     }
//     if(req.query.token!=myToken){
//         return res.send(
//             {
//                 status:0,
//                 msg:"Please fill the correct token"
//             }
//         )
//     }
//     next();
// }
// app.use(checkToken);               //middleware
// app.use((req,res,next)=>{
//      if(res.query.pass==""||req.query.pass==undefined){
//         return res.send(
//             {
//                 status:0,
//                 msg:"please fill the password"
//             }
//         )
//     }
//     if(req.query.token!=myToken){
//         return res.send(
//             {
//                 status:0,
//                 msg:"Please fill the correct password"
//             }
//         )
//     }
//     next();            
// })
app.get("/",(req,res)=>{   //http://localhost:3000/
    res.send({status:1,msg:"home page API"})
})
app.get("/news",(req,res)=>{   //http://localhost:3000/news
    res.send({status:1,msg:"news API"})
})
app.get("/news/:id",(req,res)=>{      //http://localhost:3000/news/
    let currentID=req.params.id
    res.send("News details API"+currentID)
})
app.get("/products",(req,res)=>{         //http://localhost:3000/products
    res.send({status:1,msg:"Product API"})
})
app.post("/login",(req,res)=>{
    const{username,password} = req.body;
    res.send({
        status:1,
        msg:`Post recieved.Username: ${username},Password: ${password}`
    })
});
app.post("/register",(req,res)=>{
    const{name,email,password}=req.body;

    if(!name || !email ||!password)
{
    return res.status(400).send({
        status:0,
        msg:"all the field are required:name,email,password",
    });
}
    if (password.length < 6){
        return res.status(400).send({
            status:0,
            msg:"password should be of at least 6 characters long",
        })
    }
res.send({
    status:1,
    msg:"user entered succesfully!",
    data:{name,email},
});
});
app.listen(3000,() =>{
    console.log("server running on http://localhost:3000")
});
app.post("/contact",(req,res)=>{
    const{name,email,message}=req.query;
    // validate all fields
    if(!name ||!email ||!message){
        return res.status(600).send({
            status:0,
            msg:"all the fields are required:name,email,message"
        });
    }
    //basic email validation
    if(!email.includes("@")){
        return res.status(600).send({
            status:0,
            msg:"invalid email address",
        });
    }
//if all good
res.send({
    status:1,
    msg:"message recieved successfully!",
    data:{name,email,message}
});
});
