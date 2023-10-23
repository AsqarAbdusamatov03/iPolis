import './App.css'
import NavbarCom from "./components/NavbarCom/NavbarCom.jsx";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./page/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Osago from "./page/Osago/Osago.jsx";
import {ToastContainer} from "react-toastify";

import Contact from './page/Contact/Contact';
import Companies from './page/Companies/Companies';
import Single_companies from './page/Single_companies/Single_companies';
import {useEffect} from "react";



function App() {

    const currentPath = useLocation().pathname;
    useEffect(() => {
        if (!localStorage.getItem("lang")) {
            localStorage.setItem("lang", "uz");
        }
    }, []);

  return (
    <>
        <ToastContainer/>

        <NavbarCom/>
        <Routes>
            <Route path="/" element={<Home/>} />

            <Route path="/osago" element={<Osago/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/insurance-companies" element={<Companies/>}/>
            <Route path="/single-company" element={<Single_companies/>}/>

        </Routes>
        <Footer/>
    </>
  )
}

export default App
