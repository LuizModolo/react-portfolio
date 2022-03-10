import { useContext, useState } from 'react';
import Context from '../../context/Context';
import language from '../../services/language'
import projects from '../../services/projects'
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import EvenCard from './EvenCard';
import OddCard from './OddCard';
 
export default function Myprojects() {
  const {
    idiom,
  } = useContext(Context);
  const [showMore, setShowMore] = useState(false);

  return (
    <section id='projects' className='w-screen bg-dark-blue flex flex-col justify-items-center items-center'>
      <div className='flex w-10/12 flex-col justify-items-center items-center basis-1/2 text-center lg:w-8/12'>
        <h1 data-aos="fade-up" className='text-orange mt-8 font-medium text-3xl sm:text-4xl lg:mt-24'>{language.projects.title[idiom]}</h1>
        <p data-aos="fade-up" className='text-grey font-poppins mt-6 font-normal text-lg sm:text-xl lg:mt-10'>{language.projects.text[idiom]}</p>
        <div className='w-full mt-4 sm:mt-12 mb-14 flex flex-col justify-items-center items-center'>
            {!showMore ? projects.slice(0, 2).map((s, i) => (
               (i % 2 !== 0 ) ? <OddCard s={s} /> : <EvenCard s={s} /> 
            )) : projects.map((s, i) => (
              (i % 2 !== 0 ) ? <OddCard s={s} /> : <EvenCard s={s} /> 
            ))}
        </div>
        { showMore
        ?
          <h3
            onClick={() => setShowMore(!showMore)}
            data-aos="zoom-in"
            className='flex flex-col items-center text-lg lg:text-xl tracking-wide font-medium text-light-grey hover:text-yellow mb-10 md:mb-12'>
            <BsChevronDoubleUp className='text-5xl' />
            {language.projects.button2[idiom]} 
          </h3>
        :
          <h3
            onClick={() => setShowMore(!showMore)}
            data-aos="zoom-in"
            className='flex flex-col items-center text-lg lg:text-xl tracking-wide font-medium text-light-grey hover:text-yellow mb-10 md:mb-12'>
            <BsChevronDoubleDown className='text-5xl' />
            {language.projects.button1[idiom]} 
          </h3>
        }
      </div>
      <div className='bg-brush-blue-t min-w-full min-h-[80px] mt-14'/>
    </section>
  )
}