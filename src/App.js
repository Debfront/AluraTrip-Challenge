import React from "react"
import './app.css'

import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Banner from './Components/Banner/Banner'

import Main from './Components/Main/Main'
import TravelForm from './Components/TravelForm/TravelForm'

import Footer from './Components/Footer/Footer'



const App = () => {
    return (
        <>
            <Navbar />
            <Banner/>
           
            <TravelForm/>
            <Main/>
            <Home />
            
            <Footer/>
           
            
        </>
    )
}

export default App;