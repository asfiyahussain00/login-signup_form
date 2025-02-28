import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js"; 



const firebaseConfig = {
  apiKey: "AIzaSyDz24sMqP0iDv6Lg-hhiFCRLP0brRHnzA8",
  authDomain: "wellcome-form.firebaseapp.com",
  projectId: "wellcome-form",
  storageBucket: "wellcome-form.firebasestorage.app",
  messagingSenderId: "381253653211",
  appId: "1:381253653211:web:51220171f0eccd2ed532fe"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 const auth = getAuth(app); 

document.getElementById('signupBtn')?.addEventListener('click' , (e) =>{
    e.preventDefault
    let email  = document.getElementById('email').value
    let password = document.getElementById('password').value

    createUserWithEmailAndPassword(auth , email , password)
    .then(() => {
        alert('sign up succesfully')
        window.location.href='wellCome.html'

    })
.catch(error => document.getElementById('message').innerText=error.message);

})
document.getElementById('loginBtn')?.addEventListener('click' , (e) =>{
    e.preventDefault
    let email  = document.getElementById('email').value
    let password = document.getElementById('password').value

    signInWithEmailAndPassword(auth , email , password)
    .then(() => {
        alert('login up succesfully')
        window.location.href='wellCome.html'

    })
.catch(error => document.getElementById('message').innerText=error.message);

})

export function logout() { 
        signOut(auth)   
       .then(() => {  
        alert("Logged out");
       window.location.href = "index.html";
    })  
           .catch(error => console.error("Logout Error:", error)); } document.getElementById("logoutBtn")?.addEventListener("click", logout); 

