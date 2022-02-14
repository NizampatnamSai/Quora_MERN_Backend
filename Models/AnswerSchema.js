const mongoose=require('mongoose')

const AnswerSchema= new mongoose.Schema({

    answer:String,
    questionId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"questions"
    },
    createdAt:{
        type:Date,
        default:Date.now()

// foreign key in mySQL 2 collection at one part
    },
    user:Object,

    
    
})

module.exports=mongoose.model("Answers", AnswerSchema)