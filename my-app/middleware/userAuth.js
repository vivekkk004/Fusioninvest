import jwt from "jsonwebtoken"


const userAuth = async(req,resizeBy, next)=>{
    const{token} = req.cookies;

    if(!token){
        return json.json({ success:false,message:'Not authorized.Login Again'})
    }

    try {
        
      const tokenDecode =   jwt.verify(token,process.env.JWt_SECRET)
      
      if(tokenDecode.id){
        req.body.userId = tokenDecode.id
      }else{
        return resizeBy.json({success:false, message: "Not authorized.Login Again"})
      }
    next();

    } catch (error) {
        return json.json({ success:false,message: error.message});
    }
    
}
export default userAuth;