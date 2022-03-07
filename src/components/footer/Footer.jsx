import { useContext } from 'react';
import Context from '../../context/Context';
import language from '../../services/language';
import { BiCopyright } from "react-icons/bi";
 
export default function Footer() {
  const {
    idiom,
  } = useContext(Context);

  return (
    <footer className='flex items-center justify-center bg-yellow pb-4 -mt-5'>
      <p><BiCopyright /></p>
      <h1 className='text-blue font-normal text-xs md:text-base ml-2'>{language.footer.text[idiom]}</h1>
    </footer>
  )
}