import React from "react"
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp"
import HotelHome from "./navigation/routes/hotels.component";
import Navigation from './navigation/routes/navigation.component'
import UserDetails from "./components/UserDetails";

function App() {


  return (
    
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<HotelHome/>}/>
          <Route path='SignIn' element={<SignIn/>}></Route>
          <Route path='SignUp' element={<SignUp/>}></Route>
          <Route path='UserDetails' element={<UserDetails/>}></Route>
        </Route>

      </Routes>

  );
}
export default App;
