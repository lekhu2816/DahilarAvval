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
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import VerifyEmail from "./pages/verifyEmail/verifyEmail";
import ForgetPassword from "./pages/forgetPassword/forgetPassword";
import Donate from "./pages/donate/donate";
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
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/verify-email" element={<VerifyEmail/>} />
        <Route path="/forget-password" element={<ForgetPassword/>} />
        <Route path="/donate" element={<Donate/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
