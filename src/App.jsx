import './App.css'
import NavbarCom from "./components/NavbarCom/NavbarCom.jsx";
import {Route, Routes} from "react-router-dom";
// import {useEffect} from "react";
import Home from "./page/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
<<<<<<< HEAD
import Osago from "./page/Osago/Osago.jsx";
import {ToastContainer} from "react-toastify";
=======
import Contact from './page/Contact/Contact';
import Companies from './page/Companies/Companies';
import Single_companies from './page/Single_companies/Single_companies';
>>>>>>> 9076cd9aa771c96919ad25576cd5a65a5a6709df


function App() {

    // const currentPath = useLocation().pathname;
    // useEffect(() => {
    //     if (!localStorage.getItem("lang")) {
    //         localStorage.setItem("lang", "uz");
    //     }
    // }, []);

  return (
    <>
        <ToastContainer/>

        <NavbarCom/>
        <Routes>
            <Route path="/" element={<Home/>} />
<<<<<<< HEAD
            <Route path="/osago" element={<Osago/>  } />
            {/*<Route path="/contact" element={<Contact/>}/>*/}

=======
            <Route path="/osago" element={<Osago/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/insurance-companies" element={<Companies/>}/>
            <Route path="/single-company" element={<Single_companies/>}/>
>>>>>>> 9076cd9aa771c96919ad25576cd5a65a5a6709df
        </Routes>
        <Footer/>
    </>
  )
}

export default App
