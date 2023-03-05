import React from "react"

export default function About() {

    return (
        <div>
            <ul className="flex flex-col text-center border-t-4 border-amber-500 justify-center mx-auto items-center mt-4 text-lg text-gray-800  rounded-3xl">
        <li>
            <p className="p-4 hover:underline">About</p>
        </li>
        <li>
            <p className="p-4 hover:underline">Privacy Policy</p>
        </li>
        <li>
            <p className="p-4 hover:underline">Licensing</p>
        </li>
        <li>
            <p className="p-4 hover:underline">Contact</p>
        </li>
    </ul>
        </div>
    )
}