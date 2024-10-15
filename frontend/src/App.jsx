import "./App.css";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import MoreInfo from "./pages/moreInfo/moreInfo";
import Architecture from "./pages/architecture/architecture";
import Event from "./pages/event/event";
import Nature from "./pages/nature/nature";
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/moreInfo" element={<MoreInfo />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/event" element={<Event />} />
        <Route path="/nature" element={<Nature/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
