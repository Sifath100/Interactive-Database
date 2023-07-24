const axios=require('axios')

exports.homeroute=(req,res)=>{

    //making a request to /api/users
    axios.get("http://localhost:3000/api/users")
    .then((response)=>{
        res.render("index",{users:response.data})
    })
    .catch((err)=>{
        res.send(err)
    })
    
}

exports.add_user=(req,res)=>{
    res.render("adduser")
}

exports.updateuser=(req,res)=>{
    //getting specific user
    axios.get("http://localhost:3000/api/users",{params:{id:req.query.id}})
    .then((userdata)=>{
        res.render("update_user",{user:userdata.data})
        
    })
    .catch((err)=>{
        res.send(err)
    })
}