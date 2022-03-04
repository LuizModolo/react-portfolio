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
    <main className='w-screen bg-blue flex flex-col justify-items-center items-center'>
      <section className='flex flex-col justify-items-center items-center pt-40 lg:h-screen lg:pt-0 lg:flex-row lg:justify-items-center'>
        <section className='flex flex-col lg:ml-40 lg:basis-1/2'>
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
          <div className='mb-20 pointer-events-none lg:mb-28 lg:-ml-40'>
            <Lottie
              options={defaultOptions}
              height='80%'
              width='80%'
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}
            />
          </div>
        </section>
      </section>
      <div className='bg-brush-dark-t min-w-full min-h-[80px]'/>
    </main>
  )
}