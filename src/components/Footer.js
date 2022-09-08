import { FaFacebookF,FaTwitter,FaInstagram,FaPhoneAlt,FaEnvelope } from "react-icons/fa"; 

const Footer = () => {
return (
    <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        {/* <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">Fabwaste</a>. All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Contact</a>
            </li>
        </ul> */}
        <div className="flex flex-col">
            <div><h1 className="text-3xl">Fab<span>Waste</span></h1></div>
            <div className="">
                <ul class=" mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li className="inline">
                        <a href="hf" class="mr-4 hover:underline md:mr-6 ">Home</a>
                    </li>
                    <li className="inline mr-4 text-sm">
                        <a href="fhr" class="mr-4 hover:underline md:mr-6">What we do</a>
                    </li>
                    <li  className= "inline mr-4 text-sm">
                        <a href="bfh" class="mr-4 hover:underline md:mr-6">Contact</a>
                    </li>
                    <li  className= "inline mr-4 text-sm">
                        <a href="tbnfh" class="hover:underline">Privacy</a>
                    </li>
                </ul>  
            </div>
            <div className='flex flex-row'>
                <FaFacebookF/>      
                <FaTwitter/>      
                <FaInstagram/>      
                <FaPhoneAlt/>      
                <FaEnvelope/>      
            </div>
            <div><p class="text-sm text-gray-500  dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">Fabwaste</a>. All Rights Reserved.
        </p></div>
        </div>
  
    </footer>
    )
}

export default Footer;
