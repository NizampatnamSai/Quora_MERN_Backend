const express=require('express')

const router=express.Router()
const cors = require('cors')

const questionRouter=require('./Question')
const answerRouter=require('./Answer')



router.get('/',cors(), (req,res)=>{
    res.send("This api is reserved for Quoraclone MERN")
})


router.use('/questions',cors(), questionRouter)
router.use('/answers',cors(), answerRouter)

module.exports=router