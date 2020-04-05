name = document.form.name.value
username = document.form.username.value
email = document.form.email.value
mobile = document.form.mobile.value
collegeName = document.form.collegeName.value
course = document.form.course.value
var password = document.form.password
var confirmPassword = document.form.confirmPassword
var message = document.getElementById('message')

function passwordStrength(){
    password = password.value
    confirmPassword = confirmPassword.value
    if(password.length <= 6){
        message.innerHTML = "Weak Password"        
    }
    else{
        message.set = "Strong Password"
    }
}

function passwordValidation() {
    if (password != confirmPassword) {
        alert("Password not matching. Try again")
        password.value = ''
        confirmPassword.value = ''
    }
    else{
        true
    }
}

function validateForm() {
    // if(name == '' || username == '' || email == '' || mobile == '' || collegeName == '' || course =='' || password =='' || confirmPassword == ''){
    //     alert("Please complete the form")
    //     return false
    // }
    passwordValidation()
}