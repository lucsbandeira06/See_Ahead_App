import React from 'react'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import {auth} from "../../firebaseConfig"

const SignUp = () => {

    //useState hooks used to store new users credentials
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    //On this variable I am using the data stored in the hooks above to create a new user with email and password on Firebase.
    const signUpHandler = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
         
        }).catch((error) => {
            console.log(error)
        })
    }


    return (

        //Form that allows the user to choose their credentials
        <div className="sign-in-container bg-blue-400 relative flex h-24 w-fit items-center space-x-1 justify-center m-4 mx-auto">
            <form onSubmit={signUpHandler}>
            <h1 className="justify-items-center">Create Account Below</h1>
            
            <input type="email" placeholder=" Enter your email" 
            className="m-2"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}></input>

            <input type="password" placeholder=" Enter your password"
            className="m-2" 
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}></input>

            <button type="submit" className="bg-blue-400 rounded-md text-white font-bold border-2 border-sky-600 w-40 h-8 m-4 shadow-xl">Sign Up</button>
            </form>
        </div>
    )
}


export default SignUp