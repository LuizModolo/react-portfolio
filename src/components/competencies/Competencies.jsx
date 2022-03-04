import { useContext } from 'react';
import Context from '../../context/Context';
import Language from '../../services/Language'
import skills from '../../services/skills'

 
export default function Principal() {
  const {
    language,
  } = useContext(Context);

  return (
    <main className='w-screen h-screen bg-blue flex flex-col justify-items-center items-center'>
      <section className='flex w-10/12 flex-col basis-1/2 text-center lg:w-8/12'>
        <h1 className='text-white mt-8 font-medium text-3xl sm:text-4xl lg:mt-24'>{Language.skills.title[language]}</h1>
        <p className='text-grey font-poppins mt-6 font-normal text-lg sm:text-xl lg:mt-16'>{Language.skills.text[language]}</p>
        <div className='mt-6 flex flex-wrap justify-items-center items-center'>
          {skills.map((s) => (
            <div className='flex flex-col justify-items-center items-center m-6 w-16 h-16'>
              <div>
                {s.img}
              </div>
              <p className='text-light-grey'>{s.name}</p>
            </div>
          ))}
        </div>
      </section>
      <div className='bg-brush-dark-t min-w-full min-h-[80px]'/>
    </main>
  )
}