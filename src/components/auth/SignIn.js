import React from 'react'
import { useState, useEffect } from 'react'
import { signInWithEmailAndPassword } from '@firebase/auth'
import {auth} from "../../firebaseConfig"


const SignIn = () => {

    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const signInHandler = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            console.log(userCredentials)
        }).catch((error) => {
            console.log(error)
        })

    }

    return (
        <div className="sign-in-container relative flex h-16 w-auto items-center space-x-1 justify-center m-4">
            <form onSubmit={signInHandler}>
            <h1 className="items-center">Log in your account</h1>
            
            <input type="email" placeholder=" Enter your email" 
            className="m-2"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}></input>

            <input type="password" placeholder=" Enter your password"
            className="m-2" 
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}></input>

            <button type="submit" className="bg-blue-400 rounded-md text-white font-bold border-2 border-sky-600 w-40 h-8 m-4 shadow-xl">Log In</button>
            </form>
        </div>
    )
}


export default SignIn