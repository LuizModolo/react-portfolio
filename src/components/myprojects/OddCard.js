import { useContext } from 'react';
import Context from '../../context/Context';

export default function OddCard({s}) {
  const {
    idiom,
  } = useContext(Context);

  return (
    <div
      data-aos="fade-right"
      key={s.title[idiom]}
      className='flex flex-col justify-items-center items-center sm:grid sm:grid-rows-3 sm:grid-cols-6 sm:gap-3 w-11/12 sm:w-full sm:place-items-end my-9 sm:my-7'>
      <h1 
        className='sm:col-span-3 lg:col-span-4 text-yellow font-medium text-xl lg:text-2xl sm:pt-5 my-2 sm:my-0'>
        {s.title[idiom]}
      </h1>
      <img 
        className='sm:row-start-1 sm:row-end-4 sm:col-start-4 sm:lg:col-start-5 sm:col-end-7 sm:place-self-center w-10/12  lg:ml-12 2xl:ml-0'
        src={s.img[idiom]}
        alt={`Project ${s.title[idiom]} mockup`}
      />
      <p 
        className='sm:col-span-3 lg:col-span-4 font-poppins text-light-grey font-light text-sm lg:text-lg text-center sm:text-right sm:pb-2 my-2.5 sm:my-0'>
        {s.text[idiom]}
      </p>
      <div 
        className='sm:col-span-3 lg:col-span-4 sm:w-full h-full flex sm:flex-row-reverse justify-items-center sm:justify-items-start items-center my-2.5 sm:my-0'>
        <a
          href={s.buttonGithubUrl[idiom]}
          target="_blank"
          rel="noreferrer"
          className='bg-btn-bg hover:bg-btn-bg-org bg-center bg-cover text-blue font-semibold text-lg lg:text-xl w-32 h-12 sm:w-28 lg:w-36 sm:h-10 lg:h-14 pt-2 sm:pt-1.5 lg:pt-3.5'>
          {s.buttonGithubName[idiom]}
        </a>
        <a
          href={s.buttonDeployUrl[idiom]}
          target="_blank"
          rel="noreferrer"
          className='bg-btn-bg hover:bg-btn-bg-org bg-center bg-cover text-blue font-semibold text-lg lg:text-xl w-32 h-12 sm:w-28 lg:w-36 sm:h-10 lg:h-14 pt-2 sm:pt-1.5 lg:pt-3.5'>
          {s.buttonDeployName[idiom]}
        </a>
      </div>
    </div>
  )
}