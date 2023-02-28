import { onAuthStateChanged, signOut } from '@firebase/auth'
import React, { useState, useEffect } from 'react'
import {auth} from '../firebaseConfig'

const UserDetails = () => {

    const [authUser, setAuthUser] = useState({})


    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })

        return () => {
            listen()
        }
    }, [])

    const UserSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out successfully')
        }).catch(error => console.log(error))
    }

    return (
       <div>{ authUser ? <div className="container w-fit mx-auto bg-blue-400 rounded-xl shadow-md p-10 m-10">
           
           <p>{`Signed In as ${authUser.email}`}</p>
            <button onClick={UserSignOut} className="bg-blue-400 rounded-md text-white font-bold border-2 border-sky-600 w-40 h-8 m-4 shadow-xl">Sign out</button>
            </div> : <div className="container w-fit mx-auto bg-blue-400 rounded-xl shadow-md p-10 m-10"><p>Signed Out</p></div> }
       </div>
    )
}


export default UserDetails