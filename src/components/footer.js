import React, { useState }from "react"
import { LockClosedIcon } from '@heroicons/react/24/outline'

export default function Footer() {

    //Privacy and policy logic
    const [showModal, setShowModal] = useState(false);

    return (
<footer className="p-4 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-400 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 inset-x-0 bottom-0 border-t-2 border-amber-600">
    <span className="text-sm sm:text-center text-gray-800">© 2023 <a href="N/A" className="hover:underline">SeeAhead™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-800 sm:mt-0">
        <li>
            <p  className="mr-4 hover:underline md:mr-6 ">About</p>
        </li>
        <li>
        <button className="mr-4 hover:underline md:mr-6 " onClick={() => setShowModal(true)}>Privacy Policy</button>

        {showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3 sm:flex">
                                    <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                                        <LockClosedIcon className="h-6 w-6" aria-hidden="true"/>
                                    </div>
                                    <div className="mt-2 text-center sm:ml-4">
                                        <h4 className="text-lg font-medium text-gray-800 sm:text-left">
                                            Privacy Policy
                                        </h4>
                                        <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                                           This website was created as a study showcase. The only data being collected is your email address for authentication purposes.
                                        </p>
                                        <div className="items-center mt-3 mx-auto">
                                            <button
                                                className="w-2/5 items-center mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                                onClick={() =>
                                                    setShowModal(false)
                                                }
                                            >
                                                Got it!
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
    
     
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
