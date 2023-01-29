console.log("hhhhhhhhhhhhhhhhhhhh");


function namecheck() {
  console.log('hhhhhhhhhhhhhhhhhhhhhhh');
 
  let name = document.getElementById("check-name").value
  var nameError = document.getElementById("name-error");
  var nameBorder = document.getElementById("check-name");
  

  let nm = null
  nm = name.trim()
  var letters = /^[A-Za-z]+$/;
  var spc = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+[A-Za-z]*$/;
  console.log(nm);
  if (nm == "" || name == null) {
    nameError.innerHTML = 'name is required'
    nameBorder.style.borderColor ="#ff4040"

    return false
  }
  else if (!isNaN(nm[0])) {
    console.log("opoooo");
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
    nameError.innerHTML = 'first letter can not be a number'
    nameBorder.style.borderColor ="#ff4040"
  }


  else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)) {
    nameError.innerHTML = 'do not use special charecters'
    nameBorder.style.borderColor ="#ff4040"
  }
  else {
    nameError.innerHTML = ''
    nameBorder.style.borderColor ="#8dff70"
    return true

  }
}

function msgcheck() {

  var val = document.getElementById("msg").value
  var v = null
  v = val.trim()
  document.getElementById("msg").value = v;
  var n = v.length
  console.log(n)
  if (v == "" || val == null) {
    document.getElementById("ml").style.display = "block"
    return false
  }
  else if (20 >= n) {
    console.log(v.length)
    document.getElementById("ml-01").style.display = "block"
    return false
  }
  else {
    document.getElementById("ml").style.display = "none"
    document.getElementById("ml-01").style.display = "none"
    return true
  }
}
