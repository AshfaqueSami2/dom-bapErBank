//step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //step 2: get the email address inside the memail input field
    //always remember to use .value to get text from an input field
const emailField = document.getElementById('user-email');
const email = emailField.value;
//step-3: get password
const passwordField = document.getElementById('user-password');
const password = passwordField.value;
console.log(email,password)

//Danger: DO not verify email password on the client side
// Step-4: verify email and password
if(email === 'ashfaquesami2@gmail.com' && password === 'samivhai'){
    window.location.href = 'bank.html'
}
else{
    alert('kire vhai bhuila gele hobe')
}
})