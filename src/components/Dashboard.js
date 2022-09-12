import { Link } from 'react-router-dom'
import { BsPeopleFill } from 'react-icons/bs';
import { FaStore } from 'react-icons/fa';
import { SiGoogleanalytics } from 'react-icons/si';
import { FiLogOut } from 'react-icons/fi';






const Dashboard = () => {
  return (
    <>
      <div className='w-full h-12.5 bg-gray-100 shadow-md'>
          <p className='text-xl py-3 pl-10 font-bold'>Fab<span className='text-l text-greeen font-light'>Waste</span></p>
          <div className='float-right flex flex-row'>
            <div className='w-8 h-8 rounded-full bg-gre -mt-10 mr-3'></div>
            <h1 className='text-sm -mt-9'>Username</h1>
            <FiLogOut className='-mt-8 mx-5 '/>
          </div>
      </div>
      <div className="sidebar w-1/6 bg-ebe h-screen pt-8 text-base">
        <h1 className='text-lg ml-5 mb-10'>Dashboard</h1>
        <ul className='ml-2'>
          <li className='ml-5 hover:ml-3 hover:mx-auto hover:h-8 hover:w-5/6 hover:pl-5 hover:pt-1 hover:rounded-md text-gre hover:font-semibold  hover:border-solid hover:bg-gre hover:bg-opacity-30 mb-7 hover:duration-500'> <Link to="/"><BsPeopleFill className='inline mr-2 -mt-1'/>Requests</Link></li>
          <li className='ml-5 hover:ml-3 hover:mx-auto hover:h-8 hover:w-5/6 hover:pl-5 hover:pt-1 hover:rounded-md text-gre hover:font-semibold  hover:border-solid hover:bg-gre hover:bg-opacity-30 mb-7 hover:duration-500'><a href="#whatWedo"><FaStore className='inline mr-2 -mt-1'/>Store</a></li>
          <li className='ml-5 hover:ml-3 hover:mx-auto hover:h-8 hover:w-5/6 hover:pl-5 hover:pt-1 hover:rounded-md text-gre hover:font-semibold  hover:border-solid hover:bg-gre hover:bg-opacity-30 mb-7 hover:duration-500'><a href="#g"><SiGoogleanalytics className='inline mr-2 -mt-1'/>Analytics</a></li>
        </ul>
      </div>
    </>
  )
}

export default Dashboard