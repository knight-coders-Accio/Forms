
let name_box = document.querySelector("#name"); // <input type="text" id="name">
let email_box = document.querySelector("#email");
let password_box = document.querySelector("#password");
let confirm_password_box = document.querySelector("#confirm-password");
let submit_button = document.querySelector("#submit");
let output = document.querySelector("#output");

// console.log(name_box, email_box, password_box, confirm_password_box, submit_button);


submit_button.addEventListener("click", implementSignup);


function implementSignup(event) {
    event.preventDefault();

    let name = name_box.value;
    let email = email_box.value;
    let password = password_box.value;
    let confirm_password = confirm_password_box.value;


   // validations: 

    if(name == "" || email == "" || password == "" || confirm_password == "") {
        alert("Please fill all the fields");
        return;
    }
    // if(name.length <4){
    //     alert("Name should be atleast 4 characters");
    //     return;
    // }
    if(password != confirm_password) {
        alert("Passwords do not match");
        return;
    }

    // display the infomration
    output.innerHTML = `Name: ${name} <br> Email: ${email} <br> Password: ${password}`;

}


// change event, input event


name_box.addEventListener("input", detectError)


function detectError(event){
    //   console.log("change event has been detected")
    let name = name_box.value;
    name_box.style.outline = "none";
    if(name.length<4){
        name_box.style.border = "2px solid red";
        
    }
    else{
        name_box.style.border = "2px solid green";
    }
}