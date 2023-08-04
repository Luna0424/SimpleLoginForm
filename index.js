function login(){
    var emailField = document.getElementById('txtName').value;
    var passwordField = document.getElementById('txtPassword').value;

    //This is a very simple password handeling system, if you need this to be secure store this value in a database instead.
    var passwordOnfile = "admin";
    var emailOnFile = "admin"

    if(emailField == emailOnFile && passwordField == passwordOnfile){
        document.getElementById('locked').style.display = 'none';
        document.getElementById('unlocked').style.display = 'block';
    }
}
