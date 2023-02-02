function namecheck() {
  let name = document.getElementById("check-name").value
  var nameError = document.getElementById("name-error");
  var nameBorder = document.getElementById("check-name");
  

  let nm = null
  nm = name.trim()
  var letters = /^[A-Za-z]+$/;
  var spc = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+[A-Za-z]*$/;
  if (nm == "" || name == null) {
    nameError.innerHTML = 'name is required'
    nameBorder.style.borderColor ="#ff4040"

    return false
  }
  else if (!isNaN(nm[0])) {
    nameError.innerHTML = 'first letter can not be a number'
    nameBorder.style.borderColor ="#ff4040"

    return false
  }
  else if (nm.match(spc)) {
    nameError.innerHTML = 'do not use special charecter'
    nameBorder.style.borderColor ="#ff4040"

    return false
  }
  else {
    nameError.innerHTML = ''
    nameBorder.style.borderColor ="#8dff70"
    return true

  }
}


function emailcheck() {
  var val = document.getElementById("check-email").value
  var emailError = document.getElementById("email-error");
  var emailBorder = document.getElementById("check-email");

  var v = null
  v = val.trim()
  //document.getElementById("email").value = v;
  if (v == "" || val == null) {
    emailError.innerHTML = 'email is required'
    emailBorder.style.borderColor ="#ff4040"
  }
  else if (!isNaN(v[0])) {
    emailError.innerHTML = 'first letter can not be a number'
    emailBorder.style.borderColor ="#ff4040"
  }


  else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)) {
    emailError.innerHTML = 'Enter valid mail id'
    emailBorder.style.borderColor ="#ff4040"
  }
  else {
    emailError.innerHTML = ''
    emailBorder.style.borderColor ="#8dff70"
    return true

  }
}

function msgcheck() {

  var val = document.getElementById("msg").value
  var messageBorder = document.getElementById("msg")
  var messageError = document.getElementById("msg-error")
  var v = null
  v = val.trim()
  messageError.innerHTML = 'write at least 20 letters'
  messageBorder.style.borderColor ="#ff4040"
  var n = v.length

  if (v == "" || val == null) {
    messageError.innerHTML = 'write something'
    messageBorder.style.borderColor ="#ff4040"
    return false
  }
  else if (20 >= n) {
    messageError.innerHTML = 'write at least 20 letters'
    messageBorder.style.borderColor ="#ff4040"
    return false
  }
  else {
    messageError.innerHTML = ''
    messageBorder.style.borderColor ="#8dff70"
    return true
  }
}

function validateForm(){
  var submitError = document.getElementById('submitt-error')
  if(!msgcheck() && !emailcheck() && !namecheck() ){
      submitError.style.direction = 'block';
      submitError.innerHTML = 'Please Fix the errors to submit'
      setTimeout(function(){submitError.style.display = 'none ';} , 3000)
      return false;
  }
}