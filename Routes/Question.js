const express= require('express')
const router=express.Router()


const questionDB=require('../Models/QuestionSchema')
// const questionDB=require('../Models/QuestionSchema')


// API for posting Questions

router.post('/', async(req,res)=>{

    console.log(req.body)

    try {
        await questionDB.create({
            questionName:req.body.questionName,
            questionUrl:req.body.questionUrl,
            user:req.body.user
        }).then(()=>{
            res.status(201).send({
                status:true,
                message:'Question added successfully'
            });
            }).catch((e)=>{
                res.status(400).send({
                    status:false,
                    message:'Bad formst'
                })
        })

    } catch (error) {
        res.status(500).send({
            status:false,
            message:'Error while adding question'
        })
        
    }

});




// API for getting Questions


router.get('/',async (req,res)=>{
    // mongoDB aggregation pipeline (goint 2 collection)
    // Lokup or pipe line (2 table join to have 1 table)

    try {

        await questionDB.aggregate([
            {
                $lookup: {
                    from:"answers", //collection to join
                    localField: "_id", //field from input document
                    foreignField: "questionId",
                    as: "allAnswers" //Output array field 

                }
            }
        ]).exec().then((doc)=>{
            res.status(200).send(doc)
        }).catch((e)=>{
            res.status(400).send({
                status:false,
                message:"Unabled to get the Question details!"
            })
        })
        
    } catch (error) {
        res.status(500).send({
            status:false,
            message:" Unexpected error"
        })
        
    }

})

module.exports=router
