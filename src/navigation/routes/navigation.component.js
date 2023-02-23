import React, {Fragment} from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../navbar'
import Footer from '../../components/footer'

const Navigation = () => {

    return (
        <Fragment>
            <div className="nav-bar">
                <NavBar/>
            </div>

            <div className="w-full h-full">
            <Outlet/>

            </div>
           

            <div className="footer">
                <Footer/>
            </div>
        </Fragment>
    )
}

export default Navigation