$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}
    console.log(unindexed_array)
    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })
    console.log("yoooo")
    console.log(data)


    var request = {
        "url" : `http://localhost:3000/api/users/${data._id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        // alert("Data Updated Successfully!");
        window.location.href="/"
    })

})