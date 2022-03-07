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
    <main id='home' className='w-screen bg-blue flex flex-col justify-items-center items-center'>
      <section className='flex flex-col justify-items-center items-center pt-40 lg:h-screen lg:pt-0 lg:flex-row lg:justify-items-center'>
        <section className='flex flex-col text-2xl ssm:text-3xl sm:text-5xl lg:text-4xl xl:text-5xl lg:ml-24 xl:ml-32 lg:pr-10 lg:basis-1/2'>
          <div className='flex flex-row mb-4'>
            <h2 className='text-white font-medium'>{Language.principal.part1[language]}</h2>
            <span className='text-yellow ml-4 font-medium'>{Language.principal.span1[language]}</span>
            <span className='text-orange ml-3 font-medium'>{Language.principal.span2[language]}</span>
          </div>
          <h1 className='text-white ml-10 mb-4 font-medium'>{Language.principal.part2[language]}</h1>
          <h1 className='text-white ml-10 mb-4 font-medium'>{Language.principal.part3[language]}</h1>
          <h2 className='text-yellow font-medium'>{Language.principal.part4[language]}</h2>
        </section>
        <section className='lg:basis-1/2'>
          <div className='mb-20 pointer-events-none lg:mb-28 lg:-ml-40'>
            <Lottie
              options={defaultOptions}
              height='85%'
              width='85%'
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