console.log("hello")

$(document).ready(function(){
    $("#submit_btn").on("click",function(event){
        event.preventDefault();

        user_data={
               user: 
                    {name: $("#name").val(),
                        phno: $("#phno").val(),
                    },   
                };
        console.log(user_data);

        $.ajax({
            url: "http://localhost:3000/users",
            method: "POST",
            data: user_data,
            dataType: "html",
            success: function(result){
                console.log(result);
                $("#all_users").append(result)
            },
        });
    });
});