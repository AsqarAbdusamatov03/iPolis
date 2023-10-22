import './App.css'
import NavbarCom from "./components/NavbarCom/NavbarCom.jsx";
import {Route, Routes} from "react-router-dom";
// import {useEffect} from "react";
import Home from "./page/Home/Home.jsx";
import Osago from "./page/Osago/Osago.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App() {

    // const currentPath = useLocation().pathname;
    // useEffect(() => {
    //     if (!localStorage.getItem("lang")) {
    //         localStorage.setItem("lang", "uz");
    //     }
    // }, []);

  return (
    <>
        <NavbarCom/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/osago" element={<Osago/>}/>
            {/*<Route path="/contact" element={<Contact/>}/>*/}
        </Routes>
        <Footer/>
    </>
  )
}

export default App
