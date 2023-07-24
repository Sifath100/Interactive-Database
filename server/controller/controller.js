const userdb=require("../model/model")

exports.create=(req,res)=>{
    //validate request first
    if(!req.body){
        res.status(400).send({message:"Content can not be Empty"})
        return
    }
    
    //new instance of the model
    const user=new userdb({
        name:req.body.name,
        Email:req.body.Email,
        gender:req.body.gender,
        status:req.body.status
    })

    //save on mongoDb
    user.save(user)
        .then((data)=>{
            // res.send(data)
            res.redirect("/")
        })
        .catch((err)=>{
            res.status(500).send({message:err.message || "something went wrong,couldn't create user"})
        })
}

//to find single or more

exports.find=(req,res)=>{
    if(req.query.id){
        //to find single user
        const id=req.query.id
        userdb.findById(id)
        .then((data)=>{
            if(!data){
                res.status(404).send({message:`can not find user by ${id}`})
            }
            res.send(data)
        })
        .catch((err)=>{
            res.status(500).send({message:`something went wrong in finding by id , maybe can not find user by ${id}`})
        })
    }
    else{
        //for multi user
        userdb.find()
        .then((user)=>{
            res.send(user)
        })
        .catch((err)=>{
            res.status(500).send({message:err.message || "Cant find,something went wrong"})
        })
    }
    
}

exports.update=(req,res)=>{

    if(!req.body){
        res.status(400).send({message:"Data to update cannot be empty"})
    }

    const id=req.params.id
    userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
        .then((data)=>{
            if(!data){
                res.status(404).send({message:`cannot find user, maybe ${id} is wrong`})
            }else{
                res.send(data)
            }
        })
        .catch((err)=>{
            res.status(500).send({message:"Error in updating user"})
        })
}

exports.delete=(req,res)=>{

    const id=req.params.id
    userdb.findByIdAndDelete(id)
        .then((data)=>{
            if(!data){
                res.status(404).send({message:`can not delete maybe ${id} is wrong`})
            }
            else{
                res.send({message:"data deleted successfully"})
            }
        })
        .catch((err)=>{
            res.status(500).send({message:"Data could not be deleted"})
        })
}