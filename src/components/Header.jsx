import React from 'react'
import { GoClock } from "react-icons/go";
import logo from "../assets/logonavbar.svg"
import { IoCall, IoStatsChartOutline, IoLogoWhatsapp } from "react-icons/io5";
import { CiHeart, CiSearch, CiLocationOn } from "react-icons/ci";
import { menuItems, navbarItems} from "../stock";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
    <div className='hidden md:flex bg-[#EFF0F0]'>
      <div className='container w-[1400px] m-auto'>
      <div className='hidden sm:flex justify-between '>
      <div className='flex items-center gap-1 opacity-60 hover:opacity-100 transition duration-300 ease-in-out'> 
        <CiLocationOn/>
        <p>Россия, Москва, 38КМ МКАД, 6Бс1
        </p>
      </div>
      <div className='flex items-center gap-1 opacity-60 hover:opacity-100 transition duration-300 ease-in-out'>
        <GoClock/>
        <p>Время работы: c 08:00 до 21:00</p>
      </div>
      <div className='flex items-center gap-1 opacity-60 hover:opacity-100 transition duration-300 ease-in-out'>
        <IoLogoWhatsapp/>
        <p className='underline'>Whatsapp</p>
      </div>
      </div>
      </div>
    </div>
    <div>
      <div className='container lg:[400px] sm:w-[1400px] m-auto p-4'>
        <div className='flex items-center justify-between'>
   <div className='flex items-center gap-5'>
    <div className='flex flex-col gap-0.5'>
      <div className='w-5 h-0.5 bg-black rounded-full'></div>
      <div className='w-5 h-0.5 bg-black rounded-full'></div>
      <div className='w-5 h-0.5 bg-black rounded-full'></div>
    </div>
    <img src={logo} alt="#" />
 <hr className='hidden sm:flex h-10 w-0 border border-[#C2C2C4]' />
 <div className='hidden sm:flex flex-row '>
  <p className='font-bold leading-[18px] w-[200px] hidden lg:flex'><div className='flex items-center justify-center bg-red-600 text-white rounded-3xl px-4 mr-2'>10 лет</div>превосходим ваши ожидания</p>
 </div>

   </div>
    <ul className='hidden lg:flex items-center gap-4 text-sm'>
      {navbarItems.map((item, index)=>(
        <li key={index} className='text-black hover:text-red-600 transition duration-300 ease-out  cursor-pointer'>{item}</li>
      ))}
    </ul>
     <div className='flex items-center gap-5'>
      <IoCall className='hidden sm:flex bg-red-600 text-white rounded-full w-8 h-8 p-1'/>
      <div className='flex flex-col items-end'>
        <b className='hidden sm:flex font-bold text-lg sm:text-xl'>+7 (800) 551-94-31</b>
        <p className='hidden lg:flex'>+7 (495) 292-18-67</p>
      </div>
      <button className='hidden lg:flex bg-red-600 text-white p-4 px-8 rounded-xl font-bold'>Обратный звонок</button>
     </div>
     <div className='flex sm:hidden gap-2 lg:gap-4 cursor-pointer'><CiHeart className='w-6 h-6'/> <IoStatsChartOutline className='w-6 h-6'/> <CiSearch className='w-6 h-6'/></div>
        </div>

        <div className=' hidden lg:flex'>
        <ul className="hidden lg:flex items-center gap-20 mt-6">
              {menuItems.map((item, index) => (
                <li
                key={index}
                className="flex items-center gap-1 font-semibold hover:text-red-600 transition duration-300 ease-in-out cursor-pointer"
              >
              <Link to="/catalog" className="flex items-center gap-1">
               {item.title} <item.icon />
              </Link>

              </li>
              ))}
              <li className="flex gap-6 cursor-pointer">
                <CiHeart className="w-8 h-8 hover:text-red-600 transition duration-300 ease-in-out" />
                <IoStatsChartOutline className="w-8 h-8 hover:text-red-600 transition duration-300 ease-in-out" />
                <CiSearch className="w-8 h-8 hover:text-red-600 transition duration-300 ease-in-out" />
              </li>
            </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header
