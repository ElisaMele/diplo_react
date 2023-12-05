
//import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Homepage from "./pages/Homepage";
import Rooms from "./pages/Rooms";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Header />



      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="rooms" element={<Rooms />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />

          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
