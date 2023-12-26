function validation(){
    // let name = usernamevalid();
    // let emailid = emailvalid();
    // // let pwdid = passwordvalid();
    // // let conpwd = conformpwdvalid();
    // let mnum = numbervalid();
    // let DOB = dobvalid();
    // let country = countryvalid();
    // let gender = gendervalid();
    // let checkbox = boxvalidation();
    // console.log("test1", {"name":name, "emailid":emailid, "mnum":mnum, "DOB":DOB, "country":country, "gender":gender, "checkbox":checkbox});

    if(usernamevalid()){
        
        if(emailvalid()){
            if(numbervalid()){
                if(dobvalid()){
                    if(countryvalid()){
                        if(gendervalid()){
                                if(boxvalidation()){
                                    console.log("tettttttttt");
                                    result();
                                }
                        }
                    }
                }
            }

        }
     }
     

    
    
     function result(){
        document.getElementById('success_form').innerHTML="Form has been Submitted";            
         setTimeout(function() {
             
             document.getElementById("myform").reset();
             document.getElementById('success_form').style.display = "none";       
    
     }, 3000);
    
    
    }
    }  
     

// username validation

function usernamevalid(){
    var name = document.getElementById('username').value;
        let upattern = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
        if(name==''){
            output = false;
            errors= document.getElementById('nameerror').innerHTML="please fill the field";
            
        }

        else if(name.length < 5){
            output = false; 
            errors= document.getElementById('nameerror').innerHTML="please fill more than 5 characters";  
                     
        }

        else{
            output = true;
            errors= document.getElementById("nameerror").style.display = "none";
            
             
       }
       return output;


}




// email validation

function emailvalid(){
    var emailid = document.getElementById('emailids').value;
    let epattern = /^[\w.-]+@([\w-]+\.)+com$/;
    if(emailid==''){
        output = false;
        document.getElementById('emailerror').innerHTML="please fill the field";
    }
    else{
        output = true;

        errors= document.getElementById('emailerror').style.display = "none";

    }
    return output;
}



// number validation 

function numbervalid(){
    var mnum = document.getElementById('num').value;
    let mpattern = /^[+]{1}(?:[0-9\-\(\)\/\.]\s?){6, 15}[0-9]{1}$/;
    if(mnum==''){
        output = false;
        document.getElementById('phoneerror').innerHTML="please fill the number";
    }
    else if(mnum.length < 10){
        output = false;

        errors= document.getElementById('phoneerror').innerHTML="please fill 10 digit number";
    }
    else if(mnum.length > 10){
        output = false;

        errors= document.getElementById('phoneerror').innerHTML="please fill 10 digit number";
    }
    else{
        output = true;

        document.getElementById('phoneerror').style.display="none";

    }
    return output;
}

// date of birth validation

function dobvalid(){
    var DOB = document.getElementById('dateOfBirth').value;
    let dpattern = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
    if(DOB==''){
        output = false;
        errors= document.getElementById('dateofBirthErr').innerHTML="please fill the field";
    }
    else{
        output = true;

        errors= document.getElementById('dateofBirthErr').style.display = "none";

    }
    return output;
}

// country validation

function countryvalid(){
    var country = document.getElementById('countryname').value;
    if(country=='Select Your country'){
        output = false;
        document.getElementById('droperror').innerHTML="please fill the field";
    }
    else{
        output = true;

        document.getElementById('droperror').style.display = "none";

    }
    return output;
}

// gender validation

function gendervalid(){
    var genderM = document.getElementById('optradio1').checked;
    var genderF = document.getElementById('optradio2').checked;
    var gendero = document.getElementById('optradio3').checked;
    if(genderM == false & genderF == false & gendero == false){
        output = false;
        document.getElementById('genderError').innerHTML="please fill the field";
    }
    else{
        output = true;

        document.getElementById('genderError').style.display = "none";
        
    }
    return output;
}

// check box validation

function boxvalidation(){
    var checkbox = document.getElementById('defaultcheck1').checked;
    if(checkbox){
        output = true;
    document.getElementById('checkerror').style.display="none";

    }
    else{   
        output = false;
        errors= document.getElementById('checkerror').innerHTML="please tick the checkbox";
    }
    return output;
}

