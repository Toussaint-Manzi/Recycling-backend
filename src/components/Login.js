import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


const Login = () => {

  const [username,setUsername] = useState("");
  const [password,setPassword] =useState("");
  // const [error,setError] = useState("");
  // const [loading,setLoading] =useState(true);


  const handleLogin = async () =>{
    try {
      const response = await axios.post('https://powerful-everglades-87307.herokuapp.com/api/login' ,{
        username,
        password
      })

      const token = response.data.access_token; 
      localStorage.setItem("token",token);
      console.log(token);

    

      // setLoading(false);
    } catch (error) {
      
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
          <form className="absolute text-center mt-100  mx-20" onSubmit = {handleLogin}>
            <input type="text" placeholder="Enter email or username" value={username} onChange={(e)=> setUsername(e.target.value)} className="w-full h-40 text-sm bg-f3 rounded px-5 mb-2"></input>
            <input type="text" placeholder="Enter password" value={password} onChange={(e)=> setPassword(e.target.value)} className="w-full h-40 text-sm bg-f3 px-5 rounded"></input>
            <button type="submit" className="bg-greeen w-full h-40 mt-5 rounded text-white">Login</button>
          </form>
          <h1 className="text-sm text-greeen transform translate-y-300 translate-x-24 mt-2">forgot password ?</h1>
          <h1 className="text-black  transform translate-y-300 text-sm tetxt-center mx-5 my-3">Don't have an account? <span><Link to="/register" className="underline text-spot">create new</Link></span></h1>
        </div>
    </div>
  )
}

export default Login