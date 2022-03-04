import { useContext, useState } from 'react';
import Context from '../../context/Context';
import Language from '../../services/Language'
import Lottie from 'react-lottie';
import animationData from '../../services/animationDataB.json'
 
export default function Principal() {
  const {
    language,
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
    <main id='about' className='w-screen dark-blue flex flex-col justify-items-center items-center'>
      <section className='flex w-10/12 flex-col basis-1/2 text-center lg:w-8/12'>
        <h1 className='text-white mt-20 font-medium text-3xl sm:text-4xl lg:mt-24'>{Language.about.title[language]}</h1>
        <p className='text-grey font-poppins mt-6 font-normal text-lg sm:text-xl lg:mt-16'>{Language.about.text[language]}</p>
      </section>
      <section className='basis-1/2 lg:w-5/12'>
        <div className='pointer-events-none mt-8 mb-20 lg:mt-14'>
          <Lottie
            options={defaultOptions}
            height='80%'
            width='80%'
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        </div>
      </section>
      <div className='bg-brush-blue-t min-w-full min-h-[80px]'/>
    </main>
  )
}