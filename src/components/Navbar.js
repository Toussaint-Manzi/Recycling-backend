import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-12.5 bg-gray-100 shadow-md'>
        <p className='text-xl py-3 pl-10 font-bold'>Fab<span className='text-l text-greeen font-light'>Waste</span></p>
        <div className='flex float-right -mt-10'>
            <ul className='mr-8'>
                <li className='inline mr-4 text-sm hover:text-greeen'> <Link to="/">Home</Link></li>
                <li className='inline mr-4 text-sm hover:text-greeen'><a href="#whatWedo">What we do</a></li>
                <li className='inline mr-4 text-sm hover:text-greeen'><a href="#g">Contact</a></li>
            </ul>
            <button className='text-sm text-greeen hover:bg-greeen hover:text-white border border-greeen rounded py-1.5 px-3 mr-5 -mt-1'><Link to="/login">Login</Link></button>
        </div>
    </div>
  )
}

export default Navbar