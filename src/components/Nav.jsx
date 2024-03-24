import {headerLogo} from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react'
export default function Nav() {

  const [showNav, SetShowNav] = useState(false)


  console.log(showNav)
  return (
    <header className='padding-x py-8 absolute z-20 w-full bg-transparent '>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>

        <ul className='flex-1 flex  justify-center items-center gap-16 max-lg:hidden'>
          {
            navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href}
                   className='font-montserrat leading-normal text-lg text-slate-gray hover:text-orange-500 '
                >  
                {item.label}
                </a>
              </li>
            ))
          }
        </ul>
        <div onClick={()=> SetShowNav(!showNav)} className='hidden z-10 max-lg:block'>
          <img src={hamburger} alt="HAmburger" width={25} height={25} />
        </div>


        
        {showNav && (
         <ul className='flex flex-col gap-[80px] justify-center items-center absolute  top-0 left-0 w-full h-screen bg-white'>
         {
         navLinks.map((item) => (
           <li key={item.label}>
             <a href={item.href}
                className='font-montserrat leading-normal text-2xl text-slate-gray'
             >  
             {item.label}
             </a>
           </li>
         ))
         }
       </ul>
       
        )}
      </nav>
    </header>
  )
}
