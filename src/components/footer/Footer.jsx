import { useContext } from 'react';
import Context from '../../context/Context';
import Language from '../../services/Language';
import { BiCopyright } from "react-icons/bi";
 
export default function Footer() {
  const {
    language,
  } = useContext(Context);

  return (
    <footer className='flex items-center justify-center bg-yellow pb-4 -mt-5'>
      <p><BiCopyright /></p>
      <h1 className='text-blue font-normal text-xs md:text-base ml-2'>{Language.footer.text[language]}</h1>
    </footer>
  )
}