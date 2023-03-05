import React from "react"

export default function Footer() {

    return (
<footer className="p-4 bg-orange-400 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 inset-x-0 bottom-0">
    <span className="text-sm sm:text-center text-gray-800">© 2023 <a className="hover:underline">SeeAhead™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-800 sm:mt-0">
        <li>
            <p  className="mr-4 hover:underline md:mr-6 ">About</p>
        </li>
        <li>
            <p  className="mr-4 hover:underline md:mr-6">Privacy Policy</p>
        </li>
        <li>
            <p  className="mr-4 hover:underline md:mr-6">Licensing</p>
        </li>
        <li>
            <p href="#" className="hover:underline">Contact</p>
        </li>
    </ul>
</footer>
    )
}
