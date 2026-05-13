import portfoliodata from "../schema/portfolio.js"

let savedata = async (req,res)=>{

   let {name,mail,message} = req.body

   try{

      if(!name || !mail || !message){

         return res.status(400).json({
            message:"please fill all fields"
         })
      }

      const data = await portfoliodata.create({
         name,
         mail,
         message,
      });

      res.status(201).json({
         message: "data sent successfully",
         data
      })

   } catch(error){

      console.log(error)

      res.status(500).json({
         success:false,
         message:'internal server error',
         error:error.message,
      })
   }
}

export default savedata