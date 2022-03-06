import { useContext } from 'react';
import Context from '../../context/Context';
import Language from '../../services/Language'
import Projects from '../../services/Projects'

 
export default function Myprojects() {
  const {
    language,
  } = useContext(Context);

  return (
    <section id='projects' className='w-screen bg-dark-blue flex flex-col justify-items-center items-center'>
      <div className='flex w-10/12 flex-col justify-items-center items-center basis-1/2 text-center lg:w-8/12'>
        <h1 className='text-orange mt-8 font-medium text-3xl sm:text-4xl lg:mt-24'>{Language.projects.title[language]}</h1>
        <p className='text-grey font-poppins mt-6 font-normal text-lg sm:text-xl lg:mt-10'>{Language.projects.text[language]}</p>
        <div className='w-full mt-4 sm:mt-12 flex flex-col justify-items-center items-center'>
            {Projects.map((s, i) => {
              if (i === 0 || i === 2 ) {
                return (
                <div key={s.title[language]} 
                  className='flex flex-col justify-items-center items-center sm:grid sm:grid-rows-3 sm:grid-cols-6 sm:gap-3 w-11/12 sm:w-full sm:place-items-start my-9 sm:my-7'>
                  <h1 
                    className='sm:col-span-3 lg:col-span-4 text-yellow font-medium text-xl lg:text-2xl sm:pt-5 my-2 sm:my-0'>
                    {s.title[language]}
                  </h1>
                  <img 
                    className='sm:row-start-1 sm:row-end-4 sm:col-start-1 sm:col-end-4 lg:col-end-3 h-48 sm:h-44 md:h-56 sm:place-self-center min-w-min lg:mr-14 2xl:mr-0'
                    src={s.img[language]}
                    alt={`Project ${s.title[language]} mockup`}
                  />
                  <p 
                    className='sm:col-span-3 lg:col-span-4 font-poppins text-light-grey font-light text-sm lg:text-lg text-center sm:text-left my-2.5 sm:my-0'>
                    {s.text[language]}
                  </p>
                  <div 
                    className='sm:col-span-3 lg:col-span-4 sm:w-full h-full flex justify-items-center sm:justify-items-start items-center my-2.5 sm:my-0'>
                    <a 
                      href={s.buttonDeployUrl[language]} 
                      className='bg-btn-bg hover:bg-btn-bg-org bg-center bg-cover text-blue font-semibold text-lg lg:text-xl w-32 h-12 sm:w-28 lg:w-36 sm:h-10 lg:h-14 pt-2 sm:pt-1.5 lg:pt-3.5'>
                      {s.buttonDeployName[language]}
                    </a>
                    <a 
                      href={s.buttonGithubUrl[language]}
                      className='bg-btn-bg hover:bg-btn-bg-org bg-center bg-cover text-blue font-semibold text-lg lg:text-xl w-32 h-12 sm:w-28 lg:w-36 sm:h-10 lg:h-14 pt-2 sm:pt-1.5 lg:pt-3.5'>
                      {s.buttonGithubName[language]}
                    </a>
                  </div>
                </div>
                )
              }
              if (i === 1 || i === 3) {
                return (
                <div
                  key={s.title[language]}
                  className='flex flex-col justify-items-center items-center sm:grid sm:grid-rows-3 sm:grid-cols-6 sm:gap-3 w-11/12 sm:w-full sm:place-items-end my-9 sm:my-7'>
                  <h1 
                    className='sm:col-span-3 lg:col-span-4 text-yellow font-medium text-xl lg:text-2xl sm:pt-5 my-2 sm:my-0'>
                    {s.title[language]}
                  </h1>
                  <img 
                    className='sm:row-start-1 sm:row-end-4 sm:col-start-4 sm:lg:col-start-5 sm:col-end-7 h-48 sm:h-44 md:h-56 sm:place-self-center min-w-min lg:ml-12 2xl:ml-0'
                    src={s.img[language]}
                    alt={`Project ${s.title[language]} mockup`}
                  />
                  <p 
                    className='sm:col-span-3 lg:col-span-4 font-poppins text-light-grey font-light text-sm lg:text-lg text-center sm:text-right sm:pb-2 my-2.5 sm:my-0'>
                    {s.text[language]}
                  </p>
                  <div 
                    className='sm:col-span-3 lg:col-span-4 sm:w-full h-full flex sm:flex-row-reverse justify-items-center sm:justify-items-start items-center my-2.5 sm:my-0'>
                    <a
                      href={s.buttonGithubUrl[language]}
                      className='bg-btn-bg hover:bg-btn-bg-org bg-center bg-cover text-blue font-semibold text-lg lg:text-xl w-32 h-12 sm:w-28 lg:w-36 sm:h-10 lg:h-14 pt-2 sm:pt-1.5 lg:pt-3.5'>
                      {s.buttonGithubName[language]}
                    </a>
                    <a
                      href={s.buttonDeployUrl[language]}
                      className='bg-btn-bg hover:bg-btn-bg-org bg-center bg-cover text-blue font-semibold text-lg lg:text-xl w-32 h-12 sm:w-28 lg:w-36 sm:h-10 lg:h-14 pt-2 sm:pt-1.5 lg:pt-3.5'>
                      {s.buttonDeployName[language]}
                    </a>
                  </div>
                </div>
                )
              }
              return <div/>
            })}
        </div>
      </div>
      <div className='bg-brush-blue-t min-w-full min-h-[80px] mt-16 lg:mt-28'/>
    </section>
  )
}