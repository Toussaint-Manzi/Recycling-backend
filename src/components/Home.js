import ppp from '../img/pp.jpeg'
import Navbar from "./Navbar";
import Footer from './Footer';

const Home = () => {
  return (
    <div className='w-screen'>
        <Navbar/>
        <section id='home' className="w-screen flex justify-around bg-gray-200 -mt-2">
            <div className="flex-1 mx-16 my-20" >
                <p className="text-4xl w-1/2 mb-5 font-bold">Save the <span className="text-greeen">planet</span> and earn some <span className="text-greeen font-bold">cash</span></p>
                <p className="text-sm w-1/2 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque maxime inventore aliquid placeat. Placeat dolor nesciunt repellat, ex accusantium exercitationem assumenda? Harum facilis molestiae id culpa quaerat nihil delectus totam autem sit dolore excepturi iure corrupti, aut corporis fuga expedita?</p>
                <button className="bg-black text-white px-3 py-2">Get started</button>
            </div>
            <div className="flex-1 h-[48rem] bg-gray-200 rounded-bl-full bg-recycle object-cover">
            </div>
        </section>
        <section id="whatWedo" className="flex justify-around w-screen bg-ebe h-screen transform -translate-y-20">
            <div className="flex-1 mt-24 ml-20">
                <p className="text-4xl w-1/2 mb-5 font-bold">We are Fab<span className="text-greeen">Waste</span></p>
                <p className="text-sm w-1/2 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque maxime inventore aliquid placeat. Placeat dolor nesciunt repellat, ex accusantium exercitationem assumenda? Harum facilis molestiae id culpa quaerat nihil delectus totam autem sit dolore excepturi iure corrupti, aut corporis fuga expedita?</p>
                <p className="text-sm w-1/2 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque maxime inventore aliquid placeat. Placeat dolor nesciunt repellat, ex accusantium exercitationem assumenda? Harum facilis molestiae id culpa quaerat nihil delectus totam autem sit dolore excepturi iure corrupti, aut corporis fuga expedita?</p>
                <button className="bg-black text-white px-3 py-2">Join our team</button>
            </div>
            <div className="pic w-[24rem] h-[24rem] bg-gray-200 mr-20 mt-20 bg-team object-fill">
            </div>
        </section>
        <section id="categories" className="bg-e1 w-screen h-screen -translate-y-20">
            <h1 className="text-4xl pt-7 text-center mb-50">CATEGORIES</h1>
            <div className="card flex justify-center">
                <div className="card1 w-250 h-100 rounded bg-white shadow-md m-10"></div>
                <div className="card1 w-250 h-100 rounded bg-white shadow-md m-10"></div>
                <div className="card1 w-250 h-100 rounded bg-white shadow-md m-10"></div>
            </div>
            <div className="card flex justify-center">
                <div className="card1 w-250 h-100 rounded bg-white shadow-md m-10"></div>
                <div className="card1 w-250 h-100 rounded bg-white shadow-md m-10"></div>
                <div className="card1 w-250 h-100 rounded bg-white shadow-md m-10"></div>
            </div>
        </section>
        <section id="collector" className="w-screen bg-ebe h-full transform -translate-y-20">
            <h1 className="text-4xl pt-7 text-center mb-100">COLLECTORS</h1>
            <div className='float-right -mt-16 mr-10'>
                <label>Filter collectors by location</label>
                <select>
                    <option value="Kicukiro">Kicukiro</option>
                    <option value="Gasabo">Gasabo</option>
                    <option value="Nyarugenge">Nyarugenge</option>
                    <option value="Muhanga">Muhanga</option>
                </select>
            </div>
            <div className="grid grid-cols-4 grid-flow-row mx-auto">
                <div className="card1 w-200 h-250 rounded bg-white shadow-md m-10">
                    <div className="w-180 h-100 transform translate-x-2.5 -translate-y-8">
                        <img src={ppp} alt="b,nm." className="bg-pp w-180 h-100 object-cover shadow-xl "/>
                    </div>
                    <h1 className='text-center font-bold -mt-3'>John Doe</h1>
                    <h1 className='text-center text-greeen'>Kicukiro</h1>
                    <h1 className='text-center'>+250 788569631</h1>
                </div>
                <div className="card1 w-200 h-250 rounded bg-white shadow-md m-10">
                    <div className="w-180 h-100 transform translate-x-2.5 -translate-y-8">
                        <img src={ppp} alt="b,nm." className="bg-pp w-180 h-100 object-cover shadow-xl "/>
                    </div>
                    <h1 className='text-center font-bold -mt-3'>John Doe</h1>
                    <h1 className='text-center text-greeen'>Kicukiro</h1>
                    <h1 className='text-center'>+250 788569631</h1>
                </div>
                <div className="card1 w-200 h-250 rounded bg-white shadow-md m-10">
                    <div className="w-180 h-100 transform translate-x-2.5 -translate-y-8">
                        <img src={ppp} alt="b,nm." className="bg-pp w-180 h-100 object-cover shadow-xl "/>
                    </div>
                    <h1 className='text-center font-bold -mt-3'>John Doe</h1>
                    <h1 className='text-center text-greeen'>Kicukiro</h1>
                    <h1 className='text-center'>+250 788569631</h1>
                </div>
                <div className="card1 w-200 h-250 rounded bg-white shadow-md m-10">
                    <div className="w-180 h-100 transform translate-x-2.5 -translate-y-8">
                        <img src={ppp} alt="b,nm." className="bg-pp w-180 h-100 object-cover shadow-xl "/>
                    </div>
                    <h1 className='text-center font-bold -mt-3'>John Doe</h1>
                    <h1 className='text-center text-greeen'>Kicukiro</h1>
                    <h1 className='text-center'>+250 788569631</h1>
                </div>
            {/* </div> */}
            {/* <div className="flex justify-center"> */}
                <div className="card1 w-200 h-250 rounded bg-white shadow-md m-10">
                    <div className="w-180 h-100 transform translate-x-2.5 -translate-y-8">
                        <img src={ppp} alt="b,nm." className="bg-pp w-180 h-100 object-cover shadow-xl "/>
                    </div>
                    <h1 className='text-center font-bold -mt-3'>John Doe</h1>
                    <h1 className='text-center text-greeen'>Kicukiro</h1>
                    <h1 className='text-center'>+250 788569631</h1>
                </div>
                <div className="card1 w-200 h-250 rounded bg-white shadow-md m-10">
                    <div className="w-180 h-100 transform translate-x-2.5 -translate-y-8">
                        <img src={ppp} alt="b,nm." className="bg-pp w-180 h-100 object-cover shadow-xl "/>
                    </div>
                    <h1 className='text-center font-bold -mt-3'>John Doe</h1>
                    <h1 className='text-center text-greeen'>Kicukiro</h1>
                    <h1 className='text-center'>+250 788569631</h1>
                </div>
                <div className="card1 w-200 h-250 rounded bg-white shadow-md m-10">
                    <div className="w-180 h-100 transform translate-x-2.5 -translate-y-8">
                        <img src={ppp} alt="b,nm." className="bg-pp w-180 h-100 object-cover shadow-xl "/>
                    </div>
                    <h1 className='text-center font-bold -mt-3'>John Doe</h1>
                    <h1 className='text-center text-greeen'>Kicukiro</h1>
                    <h1 className='text-center'>+250 788569631</h1>
                </div>
                <div className="card1 w-200 h-250 rounded bg-white shadow-md m-10">
                    <div className="w-180 h-100 transform translate-x-2.5 -translate-y-8">
                        <img src={ppp} alt="b,nm." className="bg-pp w-180 h-100 object-cover shadow-xl "/>
                    </div>
                    <h1 className='text-center font-bold -mt-3'>John Doe</h1>
                    <h1 className='text-center text-greeen'>Kicukiro</h1>
                    <h1 className='text-center'>+250 788569631</h1>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Home