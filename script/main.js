name = document.form.name.value
username = document.form.username.value
email = document.form.email.value
mobile = document.form.mobile.value
collegeName = document.form.collegeName.value
course = document.form.course.value
var password = document.form.password
var confirmPassword = document.form.confirmPassword

function validateForm() {
    // if(name == '' || username == '' || email == '' || mobile == '' || collegeName == '' || course =='' || password =='' || confirmPassword == ''){
    //     alert("Please complete the form")
    //     return false
    // }
    if (password.value != confirmPassword.value) {

        alert("Password not matching. Try again")
        password.value = ''
        confirmPassword.value = ''
        return false
    }
    else{
        alert("success")
        return true
    }
}