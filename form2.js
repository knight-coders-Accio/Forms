
let name_box = document.querySelector("#name"); // <input type="text" id="name">
let email_box = document.querySelector("#email");
let password_box = document.querySelector("#password");
let confirm_password_box = document.querySelector("#confirm-password");
let submit_button = document.querySelector("#submit");
let output = document.querySelector("#output");
let form = document.querySelector("form");

// console.log(name_box, email_box, password_box, confirm_password_box, submit_button);


// submit_button.addEventListener("click", implementSignup);

form.addEventListener("submit", implementSignup)

let count = 0
let submittedDataArray = []
function implementSignup(event) {
    event.preventDefault(); // prevent any default behaviour

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
    // output.innerHTML =  output.innerHTML + ` <br> Name: ${name} <br> Email: ${email} <br> Password: ${password}`;

    // let str = "jbckjs"
    // str = str + newStr

    // finalStr = data1 + data2 + data3 + data4

    // add data to array: 
    // let submitedDataObj = {}
    submittedDataArray.push({name, email, password})

    // submittedDataArray.push({name:name, email:email, password:password})


    console.log(submittedDataArray);


    // create div dynamically:

    let submittedData = document.createElement("div");
    submittedData.className = "submitted-data";
    submittedData.id = `submitted-data-${++count}`;

    submittedData.innerHTML = ` Name: ${name} <br> Email: ${email} <br> Password: ${password}`;

    output.append(submittedData);










    // clear the form
    name_box.value = "";
    email_box.value = "";
    password_box.value = "";
    confirm_password_box.value = "";

}


// change event, input event


name_box.addEventListener("input", detectError)


let flag = false
function detectError(event){
    //   console.log("change event has been detected")
    let name = name_box.value;
    // let afterName = document.querySelector("#after-name");
    let afterName
    name_box.style.outline = "none";
    if(name.length<4){
        name_box.style.border = "2px solid red";
        // afterName.innerHTML = "Name should be atleast 4 characters";
        if(flag == false){
             afterName = document.createElement("p");
            afterName.innerHTML = "Name should be atleast 4 characters";
            afterName.id = "after-name";
            // name_box.after(afterName);
            // name_box.insertAdjacentElement("afterend", afterName);
            flag = true;
        }
    }
    else{
        name_box.style.border = "2px solid green";
        // delete afterName;
        // afterName.remove();
        let ele = document.querySelector("#after-name");
        if(ele != null){
            ele.remove();
        }
        flag = false;
    }
}