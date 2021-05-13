function hasLowerCase(password) {
   return str.toUpperCase() != str;
}

function hasUpperCase(password){
  return str.toLowerCase() != str;
}

function isValid(password){
  return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(password);

}

function verifyPassword() {  
 var password = document.getElementById("pswd").value;  
  
 if(password == "") {  
    document.getElementById("message").innerHTML = "**Fill the password please!";  
    return false;  
 }  
 
var upperCase = hasUpperCase(password);
var lowerCase = hasLowerCase(password);
var specialCharacter = isValid(password);

if(upperCase == false){
document.getElementById("message").innerHTML = "At least 1 Uppercase letter!";  
    return false;  	
}

if(specialCharacter == false){
document.getElementById("message").innerHTML = "At least 1 special character!";  
    return false;  	
}

if(lowerCase == false){
document.getElementById("message").innerHTML = "At least 1 Lowercase letter!";  
    return false;  
}	
 }
  
 if(password.length >= 8) {  
    document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
    return false;  
 } else {  
    alert("Password is correct");  
 }

  

