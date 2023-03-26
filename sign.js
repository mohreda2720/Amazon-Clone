function checkUser(e) {
  var inputEmail = document.getElementById('exampleInputEmail1').value;
  var inputPass = document.getElementById('exampleInputPassword1').value;
  var getEmail = localStorage.getItem('email');
  var getPass = localStorage.getItem('password');
  if (inputEmail == getEmail) {
    if (inputPass == getPass) {
      alert('Thank You for Login & You are Redirecting to amazon Website');
      window.location = 'index.html';
    } else {
      alert('Check Password');
    }
  } else {
    alert(' We cannot find an account with that email address ');
  }
}
