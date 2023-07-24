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
    res.render("update_user")
}