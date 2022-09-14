import Navbar from "./Navbar";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


const Login = () => {

  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] =useState("");
  // const [error,setError] = useState("");
  // const [loading,setLoading] =useState(true);
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };


  const handleLogin = async (e) =>{
    e.preventDefault();

    // console.log(`${username} ,${password}`)
    try {
      const response = await axios.post('https://damp-castle-67289.herokuapp.com/api/login' ,{
        email,
        password
      },config)
      const token = response.data.token; 
      localStorage.setItem("token",token);

      if (token) {
        navigate('/admin');
      }
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="bg-f3 h-screen">
        <Navbar/>
        <div className="flex flex-row">
            <div className='flex-1 bg-inherit h-screen'></div>
            <div className="flex-1 bg-white h-screen"></div>
        </div>
        <div className="relative w-300 h-500 mx-auto bg-white transform -mt-600 rounded shadow-lg">
        <p className='text-xl py-3 pl-10 font-bold float-right'>Fab<span className='text-l text-greeen font-light'>Waste</span></p>
          <p className="text-center text-xl pl-2 transform translate-y-100 translate-x-9 mb-5 text-black">Welcome back</p>
          <form className="absolute text-center mt-100 mx-5" onSubmit = {handleLogin}>
            <input type="text" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)} className="w-full h-40 text-sm bg-f3 rounded px-5 mb-2"/>
            <input type="text" placeholder="Enter password" value={password} onChange={(e)=> setPassword(e.target.value)} className="w-full h-40 text-sm bg-f3 px-5 rounded" />
            <button type="onSubmit" className="bg-greeen w-full h-40 mt-5 rounded text-white">Login</button>
          </form>
          <h1 className="text-sm text-greeen transform translate-y-300 translate-x-24 mt-2">forgot password ?</h1>
          <h1 className="text-black  transform translate-y-300 text-sm tetxt-center mx-5 my-3">Don't have an account? <span><Link to="/register" className="underline text-spot">create new</Link></span></h1>
        </div>
    </div>
  )
}

export default Login