document.getElementById('Signup').addEventListener('click' ,function(){
    let email= document.getElementById('email').value;
    let password= document.getElementById('password').value;
    let cpass= document.getElementById('confirm-password').value;
    let regexp= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
     
    if (!email.includes("@")){
        alert("Email is not valid");
        return;
    }
    if(!regexp.test(password)){
        alert("Password must be strong & atleast 8 character");
        return;
    }
    if(password!==cpass){
        alert("password does not match");
        return;
    }
    alert("successfull");
    document.getElementById('form').reset();
    
    })


    document.getElementById('Signup').addEventListener('click' ,function(){
        let email= document.getElementById('email').value;
        let password= document.getElementById('password').value;
        let regexp= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
         
        if (!email.includes("@")){
            alert("Email is not valid");
            return;
        }
        if(!regexp.test(password)){
            alert("Password must be strong & atleast 8 character");
            return;
        }
        alert("successfull");
        document.getElementById('form').reset();
        
        })

