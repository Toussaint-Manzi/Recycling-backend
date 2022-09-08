import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";


const Signup = () => {
  // const [ userName,useUsername ] = useState("");
  const [ firstName,setFirstname ] = useState("");
  const [ lastName,setLastname ] = useState("");
  const [ email,setEmail ] = useState("");
  const [ password,setPassword ] = useState("");
  const [ password_confirmation,setCpassword ] = useState("");
  const [ phone,setPhone ] = useState("");
  const [ location,setLocation ] = useState("");
  const [ province,setProvince ] = useState("");
  const [ district,setDistrict ] = useState("");
  const [ city,setCity ] = useState("");
  const [ streetNumber,setStreet ] = useState("");
  const [errorMsg , setErrorMsg ] = useState("");

  // const [ loading,setLoading ] = useState(true);

  const handleSignup = async() =>{
    let user = {
      firstName,
      lastName,
      email,
      password,
      password_confirmation,
      phone,
      location,
      province,
      district,
      city,
      streetNumber,
      iscollector:true
    }
    try {
      const res = await axios.post('https://powerful-everglades-87307.herokuapp.com/api/collector/register',user);
      // setErrorMsg(res.message[0]);
      console.log(res);
      if (res.status === 200) return setErrorMsg(res.data.body)
    } catch (error) {
      setErrorMsg(((error.response.data.message).split("."))[0]);
      console.log(errorMsg);
    }


    // setLoading(false);
    // console.log(errorMsg);
  }


  return (

    <div className="h-screen bg-f3">
      <Navbar/>
      <div className="relative ">
        <div className="flex flex-row ">
            <div className='flex-1 bg-f3'></div>
            <div className="flex-1 bg-white"></div>
        </div>
        <div className="w-300  text-black h-full py-3 mx-auto  mt-20 bg-white rounded shadow-lg ">
          <p className='text-xl py-3 font-bold text-center'>Fab<span className='text-l text-spot font-light'>waste</span></p>
          <h1 className="text-md text-greeen text-bold px-5">Register</h1>
          <div className="mt-20  mx-20" >
            {errorMsg && <h1 className="text-red-700">{errorMsg}</h1>}
            {/* <input type="text" required placeholder="Enter username" name="username" className="w-full h-40 text-sm bg-f3 rounded px-5 mb-2"></input> */}
            <input type="text" required placeholder="Enter firstname" value={firstName} onChange={(e)=> setFirstname(e.target.value)} className="w-full h-40 text-sm bg-f3 px-5 rounded text-black mb-2" />
            <input type="text" required placeholder="Enter lastname" value={lastName} onChange={(e)=> setLastname(e.target.value)} className="w-full h-40 text-sm bg-f3 px-5 rounded text-black mb-2" />
            <input type="text" required placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)} className="w-full h-40 text-sm bg-f3 px-5 rounded text-black mb-2" />
            <input type="text" required placeholder="Enter phone number" value={phone} onChange={(e)=> setPhone(e.target.value)} className="w-full h-40 text-sm bg-f3 px-5 rounded text-black mb-2" />
            <input type="text" required placeholder="Enter location" value={location} onChange={(e)=> setLocation(e.target.value)} className="w-full h-40 text-sm bg-f3 px-5 rounded text-black mb-2" />
            <input type="text" required placeholder="Enter province" value={province} onChange={(e)=> setProvince(e.target.value)} className="w-full h-40 text-sm bg-f3 px-5 rounded text-black mb-2" />
            <input type="text" required placeholder="Enter district" value={district} onChange={(e)=> setDistrict(e.target.value)} className="w-full h-40 text-sm bg-f3 px-5 rounded text-black mb-2" />
            <input type="text" required placeholder="Enter city" value={city} onChange={(e)=> setCity(e.target.value)} className="w-full h-40 text-sm bg-f3 px-5 rounded text-black mb-2" />
            <input type="text" required placeholder="Enter street number" value={streetNumber} onChange={(e)=> setStreet(e.target.value)}  className="w-full h-40 text-sm bg-f3 px-5 rounded text-black mb-2" />
            <input type="text" required placeholder="Enter password" value={password} onChange={(e)=> setPassword(e.target.value)} className="w-full h-40 text-sm bg-f3 px-5 rounded text-black mb-2" />
            <input type="text" required placeholder="confirm password" value={password_confirmation} onChange={(e)=> setCpassword(e.target.value)} className="w-full h-40 text-sm bg-f3 px-5 rounded text-black mb-2" />            


            {/* <label className="text-sm mb-2 text-bold">Gender:  </label> */}
            {/* <input type="radio" value="Male" name="gender"  className="text-10 mr-2 ml-2"/> Male */}
            {/* <input type="radio" value="Female" name="gender"  className="text-10 mr-2 ml-2"/> Female <br></br> */}
            {/* <label for="" className="text-sm mt-2">Enter your date of birth</label> */}
            {/* <input type="date" required placeholder="Enter your age" name="age" className="w-full h-40 text-sm bg-f3 px-5 rounded mb-2"></input> */}
            {/* <label for="" className="text-sm">Upload a profile picture</label> */}
            {/* <input type="file" accept="image/*" required name="profile" className="w-full h-40 text-sm bg-f3 px-5 py-2 rounded mb-2"></input> */}
            {/* <input type="text" required name="password" placeholder="Enter password" className="w-full h-40 text-sm bg-f3 px-5 rounded"></input> */}
            <button onClick={()=>handleSignup()} className="bg-greeen w-full h-40 mt-5 rounded text-white">Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup