import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase/init";
//creating CRUD
import { 
  collection, 
  addDoc, 
  getDocs, 
  getDoc, 
  doc, 
  updateDoc, 
  deleteDoc
 } 
  from "firebase/firestore";


import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import './App.css';

//<--------------sign up, sign in, sign out with CRUD---------------->
function App() {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  //updating post
  async function updatePost(){
       const hardCodedID = "IRX7Y8AoI1s7NrGx2Q1G";
       const postRef = doc(db, "name of collection", hardCodedID);
       const post = await getPostById(hardCodedID)
      //  update one field, using the spread operator
       const newPost = {
        ...post,
         title: "Land 100k job",
       };
       updateDoc(postRef, newPost)
  }

  //deleting post
  function deletePost(){
    const hardCodedID = "IRX7Y8AoI1s7NrGx2Q1G";
    const postRef = doc(db, "name of collection", hardCodedID);
    deleteDoc(postRef)
  }

  //creating a post
  function createPost () {
    const post ={
      title: "Finish Firebase",
      description: "do frontend Simplified",
    }
    addDoc(collection(db, "name of collection"), post)
  }

  //getting all post
  async function getAllPost(){
    const { docs } = await getDocs(collection(db,"name of collection"))
    //turn into JS,                 //adding Ids to data
    const post = docs.map(elem =>({...elem.data(), id:elem.id}))
    console.log(post)
  }

  //geting  post by ID
 async function getPostById(id){
    const hardCodedID = "IRX7Y8AoI1s7NrGx2Q1G";
    const postRef = doc(db, "name of collection", hardCodedID);
    //get single post
    const postSnap = await getDoc(postRef)
    return postSnap.data()
    console.log(post);
  }

  async function getPostByUid(){
    const postCollectionRef = await query(
    collection(db, "name of collection"),
    where("uid", "==", user.uid)
    )
        const { docs } = await getDocs(postCollectionRef);
        console.log(docs.map(doc => doc.data()))

  }

  //after refreshing the page user stays logged in
  useEffect (() => {
    //takes time to load, use loading state
    onAuthStateChanged(auth, (user) => {
      setLoading(false)
      console.log(user)
      if (user){
        setUser(user)
      }
    })
  }, [])

  function register(){
    createUserWithEmailAndPassword(auth, "M@EmailAuthCredential.com", "password")
    .then((user) => {
      console.log(user)
    })
    .catch((error) => {
     console.log(error)
    })
  }

  function login(){
    signInWithEmailAndPassword(auth, "M@EmailAuthCredential.com", "password")
    .then(({ user }) => {
      setUser(user)

    // Signed in 
   console.log(user)
  })
  .catch((error) =>{
    console(error)
  })
}

  function logOut (){
    signOut(auth)
    //set object empty
    setUser({})
  }


  return (
    <div className="App">
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={logOut}>Log Out</button>
      <button onClick={createPost}>Post</button>
      <button onClick={getAllPost}>All Post</button>
      <button onClick={getPostById}>Post Id</button>
      <button onClick={getPostByUid}>Post by UId</button>
      <button onClick={updatePost}>update post</button>
      <button onClick={deletePost}>Delete Post post</button>
      
      {/* set loading state */}
      {loading ? "Loading.." : user.email}
    </div>
  );

}
export default App;
