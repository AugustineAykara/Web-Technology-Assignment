function passwordStrength() {
    message = document.getElementById('message')
    password = document.form.password.value
    confirmPassword = document.form.confirmPassword.value
    if (password.length <= 6) {
        message.innerHTML = "Weak Password"
        message.style.color = "red"
    }
    else {
        message.innerHTML = "Strong Password"
        message.style.color = "green"
    }
}


function validateForm() {
    name = document.form.name.value
    username = document.form.username.value
    email = document.form.email.value
    mobile = document.form.mobile.value
    collegeName = document.form.collegeName.value
    course = document.form.course.value
    password = document.form.password.value
    confirmPassword = document.form.confirmPassword.value

    if(name == '' || username == '' || email == '' || mobile == '' || collegeName == '' || course =='' || password =='' || confirmPassword == ''){
        alert("Please complete the form")
        return false
    }
    else if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
        alert("Please enter a valid email-ID")
        return false
    }
    else if(mobile.length < 10){
        alert("Please enter a valid mobile number")
        return false
    }
    else if (password != confirmPassword) {
        alert("Password not matching. Try again")
        return false
    }
    else{
        alert("Your form has been submitted successfully")
        return true
    }
}
