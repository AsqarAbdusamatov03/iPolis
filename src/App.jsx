import './App.css'
import Footer from './components/Footer/Footer';
import NavbarCom from "./components/NavbarCom/NavbarCom.jsx";
import Partners from './components/Partners/Partners';
import Services from './components/Services/Services';
import Home from "./page/Home/Home.jsx";

function App() {

  return (
    <>
        <NavbarCom/>
        <Home/>
        {/* <Partners /> */}
        <Services />
        <Footer />
    </>
  )
}

export default App
