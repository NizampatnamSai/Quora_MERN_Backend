const mongoose=require('mongoose')

const QuestionSchema= new mongoose.Schema({

    questionName:String,
    questionUrl:String,
    createdAt:{
        type:Date,
        default:Date.now()

// foreign key in mySQL 2 collection at one part
    },
    answers:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answers"
    },
    user:Object,
    
})

module.exports=mongoose.model("Questions", QuestionSchema)