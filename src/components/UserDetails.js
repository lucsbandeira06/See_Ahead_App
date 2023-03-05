import { onAuthStateChanged, signOut } from '@firebase/auth'
import React, { useState, useEffect } from 'react'
import {auth} from '../firebaseConfig' // firestore
// import { collection, getDocs, doc, getDoc } from "firebase/firestore"; 



const UserDetails = () => {

    const [authUser, setAuthUser] = useState({})

    // const [multipleDocs, setMultipleDocs] = useState([])
    // const [singleDoc, setSingleDoc] = useState({}) 





    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
                // const collectionRef = firestore.collection("Users");
                // collectionRef
                // .get()
                // .then((querySnapshot) => {
                //   querySnapshot.forEach((doc) => {
                //     // do something with the data
                //     console.log(doc.data());
                //   });
                // })
                // .catch((error) => {
                //   console.log("Error getting documents:", error);
                // });
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
            console.log('Signed out successfully')
        }).catch(error => console.log(error))
    }



    return (
       <div>{ authUser ? <div className="container w-fit mx-auto bg-gradient-to-b from-orange-400 to-rose-800 rounded-xl shadow-md p-10 m-10 mt-60">

            
           
           <p className="text-center text-lg font-bold text-slate-800">{`Signed In as ${authUser.email}`}</p>
          
            <button onClick={UserSignOut} className="bg-blue-400 text-center items-center rounded-md text-slate-100 font-bold border-2 border-gray-700 w-56 h-12 m-6 hover:bg-blue-900">Sign out</button>
            </div> : <div className="container w-fit mx-auto bg-gradient-to-b from-orange-400 to-rose-800 rounded-xl text-yellow-300 shadow-md p-10 m-10 mt-60"><p>Signed Out</p></div> }
       </div>
    )
}


export default UserDetails