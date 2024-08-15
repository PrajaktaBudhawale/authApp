const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save",(req,res)=>{
   let name = req.body.name;
   let query = req.body.query;

   let transporter = nodemailer.createTransport({
          service :"gmail",
          auth :{
                   user:"prajakta.budhawale22@gmail.com",
                   pass:"thzgkvkdfjbkuawf"
                 
                 }

         })


  
 let mailOptions ={
     from : "prajakta.budhawale22@gmail.com",
     to : "prajakta.budhawale11@gmail.com",
     subject : "Enquiry from "+name ,
     text :" query "+query

}

transporter.sendMail(mailOptions,(err,info)=>{

    if(err)
         {
            console.log("mail err ",err);
            res.status(500).json(err);
           }
      else
         {
           console.log("mail send ", info.response);
            res.status(200).json("Mail send");
          }

})

});

app.listen(9000,()=>{console.log("ready @9000");});