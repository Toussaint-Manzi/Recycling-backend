import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { BsPeopleFill } from 'react-icons/bs';
import { FaStore } from 'react-icons/fa';
import { SiGoogleanalytics } from 'react-icons/si';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai'


const Dashboard = () => {
  const [ users,setUsers ] = useState([]);
  const [isLoading , setisLoading] = useState(true)



    useEffect ( ()=>{
      const token = localStorage.getItem("token");
      axios.get("https://damp-castle-67289.herokuapp.com/api/collectors",{ headers: {"Authorization" : `Bearer ${token}`} }).then((res)=>{
        setUsers(res.data.collectors);
        setisLoading(false);
        console.log(users);
      })
    },[])


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
        <div className="sidebar w-1/6 bg-ebe h-screen pt-8 text-base">
          <h1 className='text-lg ml-5 mb-10'>Dashboard</h1>
          <ul className='ml-2'>
            <li className='ml-5 hover:ml-3 hover:mx-auto hover:h-8 hover:w-5/6 hover:pl-5 hover:pt-1 hover:rounded-md text-gre hover:font-semibold  hover:border-solid hover:bg-gre hover:bg-opacity-30 mb-7 hover:duration-500'> <Link to="/"><BsPeopleFill className='inline mr-2 -mt-1'/>Requests</Link></li>
            <li className='ml-5 hover:ml-3 hover:mx-auto hover:h-8 hover:w-5/6 hover:pl-5 hover:pt-1 hover:rounded-md text-gre hover:font-semibold  hover:border-solid hover:bg-gre hover:bg-opacity-30 mb-7 hover:duration-500'><a href="#whatWedo"><FaStore className='inline mr-2 -mt-1'/>Manufacturers</a></li>
            <li className='ml-5 hover:ml-3 hover:mx-auto hover:h-8 hover:w-5/6 hover:pl-5 hover:pt-1 hover:rounded-md text-gre hover:font-semibold  hover:border-solid hover:bg-gre hover:bg-opacity-30 mb-7 hover:duration-500'><a href="#g"><SiGoogleanalytics className='inline mr-2 -mt-1'/>Managers</a></li>
            <li className='ml-5 hover:ml-3 hover:mx-auto hover:h-8 hover:w-5/6 hover:pl-5 hover:pt-1 hover:rounded-md text-gre hover:font-semibold  hover:border-solid hover:bg-gre hover:bg-opacity-30 mb-7 hover:duration-500'><a href="#g"><SiGoogleanalytics className='inline mr-2 -mt-1'/>Store</a></li>
            <li className='ml-5 hover:ml-3 hover:mx-auto hover:h-8 hover:w-5/6 hover:pl-5 hover:pt-1 hover:rounded-md text-gre hover:font-semibold  hover:border-solid hover:bg-gre hover:bg-opacity-30 mb-7 hover:duration-500'><a href="#g"><SiGoogleanalytics className='inline mr-2 -mt-1'/>Analytics</a></li>


          </ul>
        </div>
        <div className="main ml-1/6">
          <h1 className="text-lg my-10 ml-10 font-semibold text-green-700">Collector's request</h1>
          <ul className='ml-20'>
            <li className='grid grid-cols-7 border-solid  bg-white shadow'>
              <h4>Id</h4>
              <h4>Names</h4>
              <h4>Email</h4>
              <h4 className='mr-7'>Phone number</h4>
              <h4 className='ml-5'>Location</h4>
              <h4>Accept</h4>
              <h4>Delete</h4>
            </li>
              { !isLoading ?
                users.map((user)=>{
                  const {id ,firstname, lastname,email , phone,location } = user;
                  return(
                    <li key ={id}>
                      <h4>{id}</h4>
                      <h4>{`${firstname} ${lastname}`}</h4>
                      <h4>{email}</h4>
                      <h4 className='mr-7'>{phone}</h4>
                      <h4 className='ml-5'>{location}</h4>
                      <h4>Accept</h4>
                      <h4>Delete</h4>
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

export default Dashboard