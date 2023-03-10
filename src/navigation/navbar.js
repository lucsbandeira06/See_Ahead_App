import { Fragment, useState, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.png'
import React from "react"
import { Link } from 'react-router-dom'
import { onAuthStateChanged, signOut } from '@firebase/auth'
import {auth} from '../firebaseConfig'

// const navigation = [
//   { name: 'Dashboard', href: '#', current: false },
//   { name: 'Weather', href: '#', current: false },
//   { name: 'Hotels', href: '#', current: false },
//   { name: 'Hot deals', href: '#', current: false },
// ]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function NavBar() {

  const [authUser, setAuthUser] = useState(null)

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
          console.log('sign out successful')
      }).catch(error => console.log(error))
  }

  return (
    //NavBar template from tailwind css documentation
    <Disclosure as="nav" className="ring-1 ring-red-400 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-400 w-full inset-x-0 top-0 border-2 border-amber-600 shadow-xl">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Web menu bar */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* Logo mobile */}
                  <Link className="logo-container" to="/">
                  <img
                    className="block h-10 w-auto lg:hidden"
                    src={logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-10 w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                  />
                  </Link>
                </div>
                {/* <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4"> */}
                    {/* menu options / might delete later */}
                    {/* using navigation to map the objects within array navigation */}
                    {/* {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-gray-100' : 'text-gray-100 hover:bg-yellow-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))} */}
                  {/* </div>
                  </div> */}
                </div>
              {/* Bookings button and Icon */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-orange-100 p-1 text-black hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View bookings</span>
                  <BookOpenIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown mobile*/}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://media.istockphoto.com/id/517322295/photo/businessman-icon-on-white-background.jpg?s=612x612&w=0&k=20&c=nblmvXxR-4huR6u9psWI8JGDQKw6ezlXX-p3wWtouSE="
                        alt=""
                      />
                    </Menu.Button>
                  </div>

                  {/* profile dropdown web */}
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => ( authUser ?
                          <Link className="userDetails-link" to='/UserDetails'>
                          <p
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </p>
                          </Link>   
                          : 
                          <Link className="login-link" to="/SignIn">
                          <div className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}><p>Login</p></div>
                          </Link>
                          )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link>
                          <p
                            
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings (Coming Soon)
                          </p>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {authUser ? ({ active }) => (
                          
                          <p
                            onClick={UserSignOut}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                          Sign out
                          </p>
                          ): ({ active }) => (
                          <p 
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Signed out
                          </p>
                          )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
                  {/* passing list of navigation array defined at the beginning of this file */}
          {/* <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel> */}
  
        </>
      
      )}
    </Disclosure>
  )
}
