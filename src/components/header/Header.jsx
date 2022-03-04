import { useContext, useState } from 'react';
import Context from '../../context/Context';
import Language from '../../services/Language';
import SwitchLanguage from './switchLanguage';
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";


 
export default function Header() {
  const {
    language,
  } = useContext(Context);
  const [open, setOpen] = useState(false);

  return (
    <header className="shadow-md w-full fixed top-0 left-0">
      <div className='lg:flex items-center justify-between bg-orange py-4 lg:px-10 px-7'>
        <div className='cursor-pointer'>
          <h1 className="text-dark-blue basis-4/12 font-semibold text-2xl pl-6 lg:pl-24">{'<Luiz Módolo />'}</h1>
        </div>
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer lg:hidden'>
          {open ? <IoClose /> : <HiMenu /> }
        </div>
        <div className={`flex flex-col items-end lg:flex-row lg:items-center lg:pb-0 pb-12 absolute lg:static bg-orange lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
          <a href="#about" onClick={()=>setOpen(false)} className="pr-10 lg:pl-8 font-medium text-lg menu-item lg:my-0 my-3 hover:text-white duration-500">{Language.header.About[language]}</a>
          <a href="#skills" onClick={()=>setOpen(false)} className="pr-10 lg:pl-8 font-medium text-lg menu-item lg:my-0 my-3 hover:text-white duration-500">{Language.header.Skills[language]}</a>
          <a href="#projects" onClick={()=>setOpen(false)} className="pr-10 lg:pl-8 font-medium text-lg menu-item lg:my-0 my-3 hover:text-white duration-500">{Language.header.Projects[language]}</a>
          <a href="#contact" onClick={()=>setOpen(false)} className="pr-10 lg:pl-8 font-medium text-lg menu-item lg:my-0 my-3 hover:text-white duration-500">{Language.header.Contact[language]}</a>
          <SwitchLanguage />
        </div>
      </div>
    </header>
  )
}
