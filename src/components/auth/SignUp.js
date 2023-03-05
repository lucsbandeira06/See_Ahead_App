import React from 'react'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import {auth, firestore} from "../../firebaseConfig"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { collection, addDoc } from "firebase/firestore"; 

const SignUp = () => {

    const navigate = useNavigate()

    //useState hooks used to store new users credentials
    const[email, setEmail] = useState("")
    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const[phone, setPhone] = useState(null)
    const[birth, setBirth] = useState("")
    const[password, setPassword] = useState("")


    

    //On this variable I am using the data stored in the hooks above to create a new user with email and password on Firebase.
    const signUpHandler = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          const docRef = addDoc(collection(firestore, "Users"), {
            email: email,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            birth: birth
          })
          console.log("Document written with ID: ", docRef.id);
            navigate("/")
          }).catch((error) => {
            alert(`${error}. Try again.`)
        })
    }




    return (

        <div className="sign-in-container flex items-center space-x-1 justify-center mt-24 -mb-32">
       
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto inset-0 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
            <h3 className="text-3xl font=semibold">Create your account  </h3>
            <Link className="signup-container" to="/">
            <button
            className="bg-transparent items-center border-0 text-black float-right"
            >
            <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full m-2">
            X
            </span>
            </button>
            </Link>
        </div>

    <div className="relative p-6 flex-auto">
      <form 
      className="bg-gray-100 shadow-md text-center rounded px-8 pt-6 pb-8 w-full"
      onSubmit={signUpHandler}>

        <label className="block text-black text-sm font-bold mb-1">
          First Name
        </label>
        <input type="email" placeholder="Enter your name" 
        className="shadow appearance-none border rounded w-full py-2 px-1 text-black mb-2"
        value={firstName}
        onChange={(e) => {setFirstName(e.target.value)}}></input>

        <label className="block text-black text-sm font-bold mb-1">
          Last Name
        </label>
        <input type="email" placeholder=" Enter your last name" 
        className="shadow appearance-none border rounded w-full py-2 px-1 text-black mb-2"
        value={lastName}
        onChange={(e) => {setLastName(e.target.value)}}></input>

        <label className="block text-black text-sm font-bold mb-1">
         Phone
        </label>
        <input type="phone" 
        className="shadow appearance-none border rounded w-full py-2 px-1 text-black mb-2"
        value={phone}
        onChange={(e) => {setPhone(e.target.value)}}></input>

      <label className="block text-black text-sm font-bold mb-1">
          DoB (mm/dd/yyy)
        </label>
        <input type="date" 
        className="shadow appearance-none border rounded w-full py-2 px-1 text-black mb-2"
        value={birth}
        onChange={(e) => {setBirth(e.target.value)}}></input>

        <label className="block text-black text-sm font-bold mb-1">
          Email
        </label>
        <input type="email" placeholder=" Enter your email" 
        className="shadow appearance-none border rounded w-full py-2 px-1 text-black mb-2"
        value={email}
        onChange={(e) => {setEmail(e.target.value)}}></input>

        <label className="block text-black text-sm font-bold mb-1">
          Password
        </label>
        <input type="password" placeholder=" Enter your password"
        className="shadow appearance-none border rounded w-full py-2 px-1 text-black mb-2" 
        value={password}
        onChange={(e) => {setPassword(e.target.value)}}></input>
      </form>
    </div>
    
    <div className="items-center text-center flex flex-col p-6 border-t         border-solid border-blueGray-200 rounded-b">
        <Link className="login-container" to="/">
        <button type="submit" 
        className="bg-orange-400 justify-center items-center rounded-md text-white font-bold border-2 border-orange-400 w-40 h-8 m-4 shadow-xl"
        onClick={signUpHandler}>Register</button>
        </Link>
   

        <p className="flex justify-center items-center">already have an account?</p>

        <Link className="signup-container" to="/SignIn">
        <button type="submit" 
        className="bg-blue-400 rounded-md border-sky-600 text-white font-bold w-40 h-8 m-4 shadow-xl flex justify-center items-center">Login</button>
        </Link>

        </div>
        </div>
        </div>
    </div>

    </div>
    )
}


export default SignUp