function sendMail(){
    var params = {
     from_name : document.getElementById("Name").value ,
     email_id : document.getElementById("email").value ,
        message: document.getElementById("message").value ,
    }



emailjs.send("service_o7t0i6a","template_kf7nxw4",params) 
.then(
   res=> {
         document.getElementById("Name").value = "";
         document.getElementById("email").value = "";
         document.getElementById("message").value = "";
           console.log(res)
             alert("submitted")
         }
)


}