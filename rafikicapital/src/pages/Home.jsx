import React from "react";
import Navbar from "../Components/Navbar";
import Links from "../Components/Links";
import Footer from "../Components/Footer";
import Slider from "../Components/Slider";
import Products from "../Components/Products";
import MainContainer from "../Components/MainConatiner";

const Home = () => {
    return(

        <div>
            <Navbar/>
            <Links/>
            <Slider/>
            <Products/>
            <MainContainer/>
            <Footer/>
            
        </div>
    );

};

export default Home