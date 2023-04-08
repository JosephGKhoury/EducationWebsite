
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
 import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyC5u3-lGmrFvn7ogcMhHTNOY6of1W2KSWo",
   authDomain: "sapiens-social.firebaseapp.com",
   projectId: "sapiens-social",
   storageBucket: "sapiens-social.appspot.com",
   messagingSenderId: "373684133084",
   appId: "1:373684133084:web:cbe18ee369090b33a5a819"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);


document.getElementById("log-btn").addEventListener("click", function() {
  document.getElementById("reg-form").style.display = "none";
  document.getElementById("log-form").style.display = "flex";
});

document.getElementById("reg-btn").addEventListener("click", function() {
  document.getElementById("log-form").style.display = "none";
  document.getElementById("reg-form").style.display = "flex";
});

document.getElementById("login").addEventListener("click", function() {
  const loginEmail = document.getElementById("email-log").value;
  const loginPassword = document.getElementById("password-log").value;
  console.log(loginEmail);

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    document.getElementById("result-box").style.display = "flex";
    document.getElementById("log-form").style.display = "none";
    window.location.href = "dashboard.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display = "flex";
    document.getElementById("log-form").style.display = "none";
    document.getElementById("result").innerHTML = "Sorry! <br>" + errorMessage;
  });
});
document.getElementById("signUp").addEventListener("click", function() {
    const registerEmail = document.getElementById("email").value;
    const registerPassword = document.getElementById("password").value;
    const registerUsername = document.getElementById("username").value;
    console.log(registerEmail);
  
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword, registerUsername)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      document.getElementById("result-box").style.display = "flex";
      document.getElementById("reg-form").style.display = "none";
      document.getElementById("result").innerHTML = "Welcome!<br>" + registerUsername + "was Registered Successfully";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("result-box").style.display = "flex";
      document.getElementById("reg-form").style.display = "none";
      document.getElementById("result").innerHTML = "Sorry! <br>" + errorMessage;
    });
  });

  document.getElementById("logout").addEventListener("click", function() {
    signOut(auth).then(() => {
      // Sign-out successful.
      document.getElementById("result-box").style.display = "none";
      document.getElementById("reg-form").style.display = "flex";
    }).catch((error) => {
      // An error happened.
      document.getElementById("result").innerHTML = "Sorry! <br>" + errorMessage;
    });
  });
//
var menubutton = document.getElementById("menubutton")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")
  
sideNav.style.right = "-250px"
  
menubutton.onclick = function() {
    if(sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "img/close.png";
    }
    else{
        sideNav.style.right = "-250px"
        menu.src = "img/ham.png"
    }
}



 