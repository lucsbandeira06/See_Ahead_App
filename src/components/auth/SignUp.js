import React from 'react'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import {auth} from "../../firebaseConfig"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'

const SignUp = () => {

    const navigate = useNavigate()

    //useState hooks used to store new users credentials
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    //On this variable I am using the data stored in the hooks above to create a new user with email and password on Firebase.
    const signUpHandler = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
         navigate("/")
        }).catch((error) => {
            console.log(error)
        })
    }


    return (

        <div className="sign-in-container flex h-16 w-full h-max items-center space-x-1 justify-center m-4">
       
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
          x
            </span>
            </button>
            </Link>
        </div>

    <div className="relative p-6 flex-auto">
      <form 
      className="bg-gray-100 shadow-md text-center rounded px-8 pt-6 pb-8 w-full"
      onSubmit={signUpHandler}>
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
    
    <div className="items-center text-center flex flex-col p-6 border-t border-solid border-blueGray-200 rounded-b">
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