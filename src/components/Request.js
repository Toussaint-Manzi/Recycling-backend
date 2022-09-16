// import Dashboard from './Dashboard';
// import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { AiFillCheckCircle,AiOutlineUser} from 'react-icons/ai'
import { MdCancel } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import {  } from 'react-icons/ai';
import { SiGoogleanalytics } from 'react-icons/si';
import { BsPeopleFill } from 'react-icons/bs';
import { FaStore } from 'react-icons/fa';


const Request = () => {
  const [ users,setUsers ] = useState([]);
  const [isLoading , setisLoading] = useState(true);
  const [ id,setId ] = useState(null);
  const token = localStorage.getItem("token");

    useEffect (()=>{
      const fetchCollectors =async () =>{
      const res = await axios.get("https://damp-castle-67289.herokuapp.com/api/collectors",{
        headers: {
          "Authorization" : `Bearer ${token}`
        }
      });
      setUsers(res.data.collectors);
      setisLoading(false);
      // console.log(users);
      }
      fetchCollectors();
    },[]);

  const approveCollector =async () =>{
    try{
      const res = await axios.put(`https://damp-castle-67289.herokuapp.com/api/approve${id}`, {
        headers: {
        "Authorization" : `Bearer ${token}`
      }});
      console.log(res);
    } catch (error){
      console.log(error);
    }

  }


  return (
    <>
        <div className='w-full h-12.5 bg-gray-100 shadow-md'>
            <p className='text-xl py-3 pl-10 font-bold'>Fab<span className='text-l text-greeen font-light'>Waste</span></p>
            <div className='float-right flex flex-row'>
            <AiOutlineUser className='text-slate-700 -mt-10 mr-2 w-7 h-7  border border-solid rounded-full border-slate-700 border-1'/>
            <h1 className='text-sm -mt-9'>Admin</h1>
            <FiLogOut className='-mt-8 mx-5'/>
            </div>
        </div>
        <div className='flex flex-row'>

          <div className='flex flex-row '>
              <div className="sidebar bg-ebe pr-12 h-screen pt-8 text-base">
                  <h1 className='text-lg ml-5 mb-10'>Dashboard</h1>
                  <ul className='ml-2'>
                      <li className='ml-5 hover:ml-3 hover:mx-auto hover:h-8 hover:w-5/6 hover:pl-5 hover:pt-1 hover:rounded-md text-gre hover:font-semibold  hover:border-solid hover:bg-gre hover:bg-opacity-30 mb-7 hover:duration-500'> <Link to="/admin/request"><BsPeopleFill className='inline mr-2 -mt-1'/>Requests</Link></li>
                      <li className='ml-5 hover:ml-3 hover:mx-auto hover:h-8 hover:w-6/6 hover:pl-5 hover:pt-1 hover:rounded-md text-gre hover:font-semibold  hover:border-solid hover:bg-gre hover:bg-opacity-30 mb-7 hover:duration-500'><Link to="/admin/manufacturer"><FaStore className='inline mr-2 -mt-1'/>Manufacturers</Link></li>
                      <li className='ml-5 hover:ml-3 hover:mx-auto hover:h-8 hover:w-5/6 hover:pl-5 hover:pt-1 hover:rounded-md text-gre hover:font-semibold  hover:border-solid hover:bg-gre hover:bg-opacity-30 mb-7 hover:duration-500'><Link to="/admin/manager"><SiGoogleanalytics className='inline mr-2 -mt-1'/>Managers</Link></li>
                      <li className='ml-5 hover:ml-3 hover:mx-auto hover:h-8 hover:w-5/6 hover:pl-5 hover:pt-1 hover:rounded-md text-gre hover:font-semibold  hover:border-solid hover:bg-gre hover:bg-opacity-30 mb-7 hover:duration-500'><Link to="#g"><SiGoogleanalytics className='inline mr-2 -mt-1'/>Store</Link></li>
                      <li className='ml-5 hover:ml-3 hover:mx-auto hover:h-8 hover:w-5/6 hover:pl-5 hover:pt-1 hover:rounded-md text-gre hover:font-semibold  hover:border-solid hover:bg-gre hover:bg-opacity-30 mb-7 hover:duration-500'><Link to="#g"><SiGoogleanalytics className='inline mr-2 -mt-1'/>Analytics</Link></li>
                  </ul> 
              </div>
          </div>

          <div className="main w-full">
            <h1 className="text-lg my-10 ml-10 font-semibold text-green-700">Collector's request</h1>
            <ul className='ml-10'>
              <li className='grid grid-cols-7 border-solid  bg-white shadow font-semibold mb-5'>
                <h4 >Id</h4>
                <h4>Names</h4>
                <h4>Email</h4>
                <h4 className='ml-5'>Location</h4>
                <h4 className='ml-5'>Status</h4>
                <h4>Accept</h4>
                <h4>Delete</h4>
              </li>
                { !isLoading ?
                  users.map((user)=>{
                    const {id ,firstName, lastName,email,isapproved ,location } = user;
                    // setId(id);
                    return(
                      <li key ={id} className='grid grid-cols-7 text-sm mb-2'>
                        <h4>{id}</h4>
                        <h4>{`${firstName} ${lastName}`}</h4>
                        <h4>{email}</h4>
                        <h4 className='ml-5'>{location}</h4>
                        { !isapproved ? <h4 className='ml-5 bg-yellow-500 w-3/5 h-8 rounded-md pl-5 pt-1 text-white bold'>Pending</h4> : <h4 className='ml-5 bg-green-700 w-3/5 h-8 rounded-md pl-3 pt-1 text-white bold'>Approved</h4> }
                        {!isapproved ? <AiFillCheckCircle className='text-green-500 w-5 h-5 cursor-pointer' onClick={()=> oveCollector(id)}} />: <div className='mr-2'>-</div> }
                        <MdCancel className='text-red-500 w-5 h-5 cursor-pointer'/>
                      </li>
                    )
                  }): <div>Loading...</div> 
                }
            </ul>
          </div>
      </div>
    </>
  )
}

export default Request