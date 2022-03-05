import { useContext } from 'react';
import Context from '../../context/Context';
import Language from '../../services/Language'
import skills from '../../services/skills'

 
export default function Competencies() {
  const {
    language,
  } = useContext(Context);

  return (
    <section id='skills' className='w-screen bg-blue flex flex-col justify-items-center items-center'>
      <div className='flex w-10/12 flex-col justify-items-center items-center basis-1/2 text-center lg:w-8/12'>
        <h1 className='text-yellow mt-8 font-medium text-3xl sm:text-4xl lg:mt-24'>{Language.skills.title[language]}</h1>
        <p className='text-grey font-poppins mt-6 font-normal text-lg sm:text-xl lg:mt-10'>{Language.skills.text[language]}</p>
        <div className='w-11/12 mt-10 flex flex-wrap justify-items-center items-center'>
            {skills.map((s) => (
              <div key={s.name} className='flex flex-col justify-items-center items-center my-4 md:my-5 xl:my-8 w-4/12 lg:w-1/5 h-16'>
                <div className='w-max'>
                  {s.img}
                </div>
                <p className='text-grey text-sm mt-2 md:text-base xl:text-lg'>{s.name}</p>
              </div>
            ))}
        </div>
      </div>
      <div className='bg-brush-dark-t min-w-full min-h-[80px] mt-16 lg:mt-28'/>
    </section>
  )
}