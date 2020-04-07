$(function(){
    $("form").submit(function(event){
        var name = $("input[name='name']").val();
        var username = $("input[name='username']").val();        
        var email = $("input[name='email']").val();        
        var mobile = $("input[name='mobile']").val();        
        var collegeName = $("input[name='collegeName']").val();        
        var password = $("input[name='password']").val();        
        var confirmPassword = $("input[name='confirmPassword']").val();        

        if(name == '' || username == '' || email == '' || mobile == '' || collegeName == '' || course =='' || password =='' || confirmPassword == ''){
            alert("Please complete the form")
            return false
        }
       
    });
});