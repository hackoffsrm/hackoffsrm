// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyBTY8BQ_O_q7TF1dfnq2rAaqouIxM4YjDA",
    authDomain: "hackoff-a0dcf.firebaseapp.com",
    databaseURL: "https://hackoff-a0dcf-default-rtdb.firebaseio.com",
    projectId: "hackoff-a0dcf",
    storageBucket: "hackoff-a0dcf.appspot.com",
    messagingSenderId: "195466946540"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('sname');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('timee');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}