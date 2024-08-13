const firebaseConfig = {
    apiKey: "AIzaSyDyxoc_9HaE4ZmRs4acfyVvKm4G9oZ1b64",
    authDomain: "contact-form-a4d49.firebaseapp.com",
    databaseURL: "https://contact-form-a4d49-default-rtdb.firebaseio.com",
    projectId: "contact-form-a4d49",
    storageBucket: "contact-form-a4d49.appspot.com",
    messagingSenderId: "251346679568",
    appId: "1:251346679568:web:cb9a68e8a5f095c627d795"
  };

  // initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("Contact-Form");

document.getElementById("Contact-Form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("email");
  var msgContent = getElementVal("message");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("Contact-Form").reset();
}

const saveMessages = (name, email, message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    message: message,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};