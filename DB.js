const mongoose= require('mongoose')

const url=
'mongodb://b180109nitsikkim:WDz7DBJs4QTT71B3@cluster0-shard-00-00.wf8qw.mongodb.net:27017,cluster0-shard-00-01.wf8qw.mongodb.net:27017,cluster0-shard-00-02.wf8qw.mongodb.net:27017/Quora_Mern?ssl=true&replicaSet=atlas-lhv6pr-shard-0&authSource=admin&retryWrites=true&w=majority'


module.exports.connect=()=>{
    mongoose.connect(url, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{

        console.log('Mongodb connected successfully')
    }).catch((e)=>{
        console.log('error',e)
    })

}