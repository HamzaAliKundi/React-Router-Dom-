import Home from "./components/Home";
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom"
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
    
  );
}

export default App;