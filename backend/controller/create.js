

import portfoliodata from "../schema/portfolio.js"


  let savedata = async (req,res)=>{
 let {name,email,message}=req.body
 try{
    if(!name||!email||!message){
      return  res.status(400).json({
        message:"please fill all fields"
        
      })
    }
  await  portfoliodata.create({
name,
email,
message,
    });
    res.status(201).json({
        message: "data sent sucessfully",
        data: savedata
    })
 }
     catch(error){
        res.status(500).json({
          success :false,
            message:' internal server error',
         error : error.message,
        })
    }
}
export default savedata