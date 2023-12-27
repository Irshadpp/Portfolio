function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var fields = {};

document.addEventListener("DOMContentLoaded", function(){
  fields.name = document.getElementById("name");
  fields.email = document.getElementById("email");
  fields.message = document.getElementById("message");
})

function isNotEmpty(value){
  if(value == null || typeof value == undefined) return false;
  return(value.length > 0);
}

function isEmail(email){
  let regEx = /^\S+@\S+\.\S+$/;
  return regEx.test(String(email).toLowerCase())
}

function fieldValidation(field, validationFunciton) {
  if (field == null) return false;

  let isFieldValid = validationFunciton(field.value)
  if(!isFieldValid){
    field.name = "placeholderRed";
  }else{
    field.name = '';
  }
  return isFieldValid;
}

function isValid(){
  var valid = true;
  
  valid &= fieldValidation(fields.name, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);

  return valid;
}

class User {
  constructor(name,email,message){
    this.name = name;
    this.email = email;
    this.message = message;
  }
}

// function sendContact(){
//   if(isValid()) {
//     let usr = new User(name.value,email.value,message.values);

//     alert(`{usr.name} Thank you for the message`);
//   }else{
//     // alert("Something went wrong")
//   }
// }



(function () {
        emailjs.init("16OJroITLmvLSp7jR");
      })();
      
      emailjs.sendForm("service_0zlgb6f", "template_bfsn40m", "#contact-form")

      document
        .getElementById("contact-form")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          const serviceID = "service_0zlgb6f";
          const templateID = "template_bfsn40m";

          // send the email here
          emailjs.sendForm(serviceID, templateID, this).then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              alert("Message Successfully Submitted!");
            },
            (error) => {
              console.log("FAILED...", error);
              alert("FAILED...", error);
            }
          );
        });