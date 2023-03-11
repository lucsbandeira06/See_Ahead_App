import React from "react"

export default function About() {

    return (
        <div>
            <ul className="flex flex-col text-center border-t-4 border-amber-500 justify-center mx-auto items-center mt-52 text-lg text-gray-800  rounded-3xl">
        <li>
            <h1 className="p-4 mt-4 mb-2 text-4xl font-light text-blue-400">About</h1>
        </li>
        </ul>
            <div className="text-center text-blue-600 font-medium">
            <p>This project was created with React and Tailwind CSS framework.</p>

            <p>Search the best destinations for your trip based on your personal preferences.</p> 

            <p>On this website you are able to specify your check-in, and check-out dates, as well as the number of people that will be traveling with you.  </p>

            <p >Another feature of this website is that it offers weather services, such as forecast and historical weather registries.</p>
            <p className="pb-6">Customers can choose the perfect weather conditions for their trips. Wether it's skiing or surfing, you will be prepared to have fun!  </p>
            </div>
        
     
          
        </div>
    )
}