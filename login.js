document.getElementById('submit-btn').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    if( email === "saqib@gmail.com" && password === "saqib"){
        window.location.href = "bank.html";
    }
    else if(email.length === 0 || password.length === 0){
        alert("Sir kindly fill the form properly");
    }
    else if(email !== "saqib@gmail.com"){
        alert("Invalid email");
    }
    else{
        alert("Invalid Password");
    }
})