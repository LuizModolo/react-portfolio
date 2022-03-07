import { useContext, useState } from 'react';
import Context from '../../context/Context';
import language from '../../services/language'
import Lottie from 'react-lottie';
import animationData from '../../services/animationDataB.json'
 
export default function About() {
  const {
    idiom,
  } = useContext(Context);
  const [animationState] = useState({
    isStopped: false, isPaused: false
  })

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <section id='about' className='w-screen dark-blue flex flex-col justify-items-center items-center'>
      <div className='flex w-10/12 flex-col basis-1/2 text-center lg:w-8/12'>
        <h1 className='text-orange mt-20 font-medium text-3xl sm:text-4xl lg:mt-24'>{language.about.title[idiom]}</h1>
        <p className='text-grey font-poppins mt-6 font-normal text-lg sm:text-xl lg:mt-10'>{language.about.text[idiom]}</p>
      </div>
      <div className='basis-1/2 lg:w-5/12'>
        <div className='pointer-events-none mt-8 mb-20'>
          <Lottie
            options={defaultOptions}
            height='80%'
            width='80%'
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        </div>
      </div>
      <div className='bg-brush-blue-t min-w-full min-h-[80px]'/>
    </section>
  )
}