var name = document.getElementById('signupName');
var email = document.getElementById('signupEmail');
var pwd = document.getElementById('signupPassword');
var Rpwd = document.getElementById('signupPasswordagain');

function registration(e) {
  e.preventDefault();

  var pwd_expression = /[A-Za-z][0-9]+$/;
  var letters = /^[A-Za-z]+$/;
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var number = /^ (01)[0 - 2, 5]{ 1 } [0 - 9]{ 8 }+$/;

  if (!letters.test(name.value)) {
    name.style.border = '1px solid red';
  } else if (!filter.test(email.value || number.value)) {
    email.style.border = '1px solid red';
  } else if (!pwd_expression.test(pwd.value)) {
    pwd.style.border = '1px solid red';
  } else if (pwd.value != Rpwd.value) {
    Rpwd.style.border = '1px solid red';
  } else {
    alert('Thank You for Login & You are Redirecting to amazon Website');
    window.location = 'sign.html';
  }

  localStorage.setItem('email', email.value);
  localStorage.setItem('password', pwd.value);
}
