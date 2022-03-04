import { useContext, useState } from 'react';
import Context from '../../context/Context';
import Language from '../../services/Language'
import Lottie from 'react-lottie';
import animationData from '../../services/animationData.json'
 
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
    <main className='w-screen h-screen bg-blue flex flex-col justify-items-center items-center pt-24 lg:pt-0 lg:flex-row lg:justify-items-center'>
      <section className='flex flex-col lg:basis-1/2'>
        <div className='flex flex-row mb-4'>
          <h2 className='text-white text-2xl font-medium sm:text-4xl'>{Language.principal.part1[language]}</h2>
          <span className='text-orange ml-4 font-medium text-2xl sm:text-4xl'>{Language.principal.span1[language]}</span>
          <span className='text-yellow ml-3 font-medium text-2xl sm:text-4xl'>{Language.principal.span2[language]}</span>
        </div>
        <h1 className='text-white ml-10 mb-4 font-medium text-2xl sm:text-4xl'>{Language.principal.part2[language]}</h1>
        <h1 className='text-white ml-10 mb-4 font-medium text-2xl sm:text-4xl'>{Language.principal.part3[language]}</h1>
        <h2 className='text-yellow font-medium text-2xl sm:text-4xl'>{Language.principal.part4[language]}</h2>
      </section>
      <section className='lg:basis-1/2'>
        <div className='mb-24 pointer-events-none'>
          <Lottie
            options={defaultOptions}
            height='80%'
            width='80%'
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        </div>
      </section>
    </main>
  )
}