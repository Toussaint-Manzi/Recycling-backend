import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
          <Route path="login" element={<Login/>} />
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Signup />} />
          <Route path="admin" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
