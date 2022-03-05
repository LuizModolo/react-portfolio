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
        <h1 className='text-yellow mt-8 font-medium text-3xl sm:text-4xl lg:mt-24'>{Language.projects.title[language]}</h1>
        <p className='text-grey font-poppins mt-6 font-normal text-lg sm:text-xl lg:mt-10'>{Language.projects.text[language]}</p>
        <div className='w-full mt-12 flex flex-col justify-items-center items-center'>
            {Projects.map((s, i) => {
              if (i === 0 ) {
                return (
                <div key={s.title[language]} className='grid grid-rows-3 grid-cols-6 gap-3 w-full place-items-start my-5'>
                  <img className='row-start-1 row-end-4 col-start-1 col-end-3 h-56 place-self-end' src={s.img[language]} alt={`Project ${s.title[language]} mockup`}/>
                  <h1 className='col-span-4 text-orange font-medium text-2xl pt-5'>{s.title[language]}</h1>
                  <p className='col-span-4 font-poppins text-light-grey font-light text-lg text-left'>{s.text[language]}</p>
                  <div className='col-span-4 grid grid-rows-1 grid-cols-5 w-full h-full place-items-start'>
                    <a href={s.buttonDeployUrl[language]} className='bg-btn-bg bg-center bg-cover text-blue font-semibold text-xl w-full h-full pt-3.5'>{s.buttonDeployName[language]}</a>
                    <a href={s.buttonGithubUrl[language]} className='bg-btn-bg bg-center bg-cover text-blue font-semibold text-xl w-full h-full pt-3.5'>{s.buttonGithubName[language]}</a>
                  </div>
                </div>
                )
              }
              if (i === 1 ) {
                return (
                <div key={s.title[language]} className='grid grid-rows-3 grid-cols-6 gap-3 w-full place-items-end my-5'>
                  <h1 className='col-span-4 text-orange font-medium text-2xl pt-5'>{s.title[language]}</h1>
                  <p className='col-span-4 font-poppins text-light-grey font-light text-lg text-right'>{s.text[language]}</p>
                  <div className='col-span-4 grid grid-rows-1 grid-cols-5 w-full h-full place-items-end'>
                    <a href={s.buttonDeployUrl[language]} className='col-start-4 bg-btn-bg bg-center bg-cover text-blue font-semibold text-xl w-full h-full pt-3.5'>{s.buttonDeployName[language]}</a>
                    <a href={s.buttonGithubUrl[language]} className='col-start-5 bg-btn-bg bg-center bg-cover text-blue font-semibold text-xl w-full h-full pt-3.5'>{s.buttonGithubName[language]}</a>
                  </div>
                  <img className='row-start-1 row-end-4 col-start-5 col-end-7 h-56 place-self-start' src={s.img[language]} alt={`Project ${s.title[language]} mockup`}/>
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