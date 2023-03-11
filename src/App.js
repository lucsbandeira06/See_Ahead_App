import React from "react"
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp"
import HotelHome from "./navigation/routes/hotels.component";
import Navigation from './navigation/routes/navigation.component'
import UserDetails from "./components/UserDetails";
import Card from "./components/card.component";
import HotelSpecs from "./components/Description"



function App() {


  return (

      <div className="App-container bg-[url('../public/BG_3.png')] bg-cover min-h-screen">
      <Routes>
        <Route path='/' element={<Navigation/>}>
          
          <Route index element={<HotelHome/>}/>
          
          <Route path='SignIn' element={<SignIn/>}/>
          
          <Route path='SignUp' element={<SignUp/>}/>
          
          <Route path='Card' element={<Card/>}/>
          
          <Route path='UserDetails' element={<UserDetails/>}/>

          <Route path='Description' element={<HotelSpecs/>}/>

        </Route>
       

      </Routes>
      </div>
  );
}
export default App;
