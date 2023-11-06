import React, { useEffect, useState } from "react";
import { auth } from "./firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import './App.css';

//<--------------sign up, sign in, sign out---------------->
// function App() {
//   const [user, setUser] = useState({})
//   const [loading, setLoading] = useState(true)

//   //after refreshing the page user stays logged in
//   useEffect (() => {
//     //takes time to load, use loading state
//     onAuthStateChanged(auth, (user) => {
//       setLoading(false)
//       console.log(user)
//       if (user){
//         setUser(user)
//       }
//     })
//   }, [])

//   function register(){
//     createUserWithEmailAndPassword(auth, "M@EmailAuthCredential.com", "password")
//     .then((user) => {
//       console.log(user)
//     })
//     .catch((error) => {
//      console.log(error)
//     })
//   }

//   function login(){
//     signInWithEmailAndPassword(auth, "M@EmailAuthCredential.com", "password")
//     .then(({ user }) => {
//       setUser(user)

//     // Signed in 
//    console.log(user)
//   })
//   .catch((error) =>{
//     console(error)
//   })
// }

//   function logOut (){
//     signOut(auth)
//     //set object empty
//     setUser({})
//   }


//   return (
//     <div className="App">
//       <button onClick={register}>Register</button>
//       <button onClick={login}>Login</button>
//       <button onClick={logOut}>Log Out</button>
//       {/* set loading state */}
//       {loading ?"Loading.." : user.email}
//       </div>
//   );

// }
export default App;
