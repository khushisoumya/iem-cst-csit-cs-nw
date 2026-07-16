import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Faculty from "./pages/Faculty";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Programmes from "./pages/Programmes";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/programmes" element={<Programmes />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
