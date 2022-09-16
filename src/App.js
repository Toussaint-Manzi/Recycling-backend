import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Manufacturer from "./components/Manufacturer";
import Request from "./components/Request";

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
          <Route path="admin/manufacturer" element={<Manufacturer />} />
          <Route path="admin/request" element={<Request />} />

      </Routes>
    </BrowserRouter>
  );
}
