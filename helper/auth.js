exports.users=[]

exports.auth = (req, res, next)=>{
    if(req.path === "/applicant/login" || req.path === "/applicant/register" || req.path === "/set" || req.path === "/admin/login")return next()
    if(!req.session.accountId)return res.sendStatus(403)
    next()
    
}
exports.authAdmin = (req, res, next)=>{
    console.log("user type",req.session.type)
    if(req.path === "/set" || req.path === "/admin/login")return next()
    if(req.session.type!=="admin" && !req.session.accountId)return res.sendStatus(403)
    
    next()
}
exports.authApplicant = (req, res, next)=>{
    console.log("user type",req.session.type)
    if(req.path === "/set" || req.path === "/applicant/login")return next()
    if(req.session.type!=="applicant")return res.sendStatus(403)
    next()
}