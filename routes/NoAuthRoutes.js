const express = require('express');
const router = express.Router()
const adminControlloer = require('./../controllers/AdminController')


router.get('/', (req, res)=>{
    res.send("wellcome")
})
router.get('/getJobPosts', (req, res)=>adminControlloer.getJobPosts(req, res))

router.post("/admin-login", (req, res)=>adminControlloer.login(req, res))
router.post("/logout", (req, res)=>{
    console.log("logging out...")
    req.session.destroy()
    res.send({success:true})
})


module.exports = router