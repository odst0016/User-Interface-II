//logging time to save as name to database
var today = new Date();
let time = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' Time: '+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDiB47WFdx4Y9EE9r2yl68kyi3q9bFzvkA",
    authDomain: "contactform-portfoliosite.firebaseapp.com",
    databaseURL: "https://contactform-portfoliosite.firebaseio.com",
    projectId: "contactform-portfoliosite",
    storageBucket: "contactform-portfoliosite.appspot.com",
    messagingSenderId: "976934798963",
    appId: "1:976934798963:web:83185a9ebcd00e44ab0c06"
  };

  // Init Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();

  // Start grabbing our DOM elements
  const submitBtn = document.querySelector('#submit');

  let userName = document.querySelector('#userFullName');
  let userEmail = document.querySelector('#userEmail');
  let userMessage = document.querySelector('#userMessage');
  let userPhone = document.querySelector('#userPhone');

  const db = firestore.collection('contactData');

  submitBtn.addEventListener('click', function() {
    let userNameInput = userName.value;
    let userEmailInput = userEmail.value;
    let userMessageInput = userMessage.value;
    let userPhoneInput = userPhone.value;
    
    // access the database collection
    db.doc(time)
    .set({
      name: userNameInput,
      email: userEmailInput,
      message: userMessageInput,
      phone: userPhoneInput
    })
    .then(function(){
      console.log("Data Saved");
    }).
    catch(function(error){
      console.log(error);
    });
  });