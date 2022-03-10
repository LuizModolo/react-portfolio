import { useContext, useState } from 'react';
import Context from '../../context/Context';
import language from '../../services/language'
import { SiGithub, SiLinkedin,  } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BsChevronDoubleUp } from "react-icons/bs";

export default function Contact() {
  const {
    idiom,
  } = useContext(Context);
  
  const formRef = useRef();

  const [forms, setForms] = useState({
    name: '',
    email: '',
    message: '',
  });

  function handleInputChange({ target }){
    forms[target.name] = target.value;
    setForms(forms);
  }

  function handleFormSubmit(event){
    event.preventDefault();

    emailjs.sendForm('service_te0je05', 'contact_form', formRef.current, 'LajTbi0N9lxqVRfji')
        .then((result) => {
            alert(language.contact.forms.alert[idiom]);
        }, (error) => {
            alert(language.contact.forms.error[idiom]);
        });

    event.target.reset();
  }

  return (
    <section id='contact' className='w-screen bg-blue flex flex-col justify-items-center items-center'>
      <div className='flex w-10/12 flex-col text-center justify-center items-center lg:w-8/12'>
        <h1 data-aos="fade-up" className='text-yellow mt-16 font-medium text-3xl sm:text-4xl lg:mt-20'>{language.contact.title[idiom]}</h1>
        <p data-aos="fade-up" className='text-grey font-poppins mt-6 font-normal text-lg sm:text-xl lg:mt-8'>{language.contact.text[idiom]}</p>
        <div className='w-10/12 flex justify-center items-center'>
          <div className="relative flex items-top justify-center mb-16 min-w-full min-h-fit sm:items-center sm:pt-0">
            <div className="mt-8 overflow-hidden min-w-full">
                <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-2">
                    <form ref={formRef} onSubmit={handleFormSubmit} className="p-6 flex flex-col justify-center">
                        <div className="flex flex-col">
                            <label 
                              htmlFor="name"
                              className="hidden">{language.contact.forms.name[idiom]}
                            </label>
                            <input 
                              type="name"
                              name="name"
                              id="name" 
                              onChange={handleInputChange}
                              placeholder={language.contact.forms.name[idiom]}
                              className="w-100 mt-2 py-3 px-3 text-blue rounded-lg bg-light-grey border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label 
                              htmlFor="email"
                              className="hidden">{language.contact.forms.email[idiom]}
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              onChange={handleInputChange}
                              placeholder={language.contact.forms.email[idiom]} 
                              className="w-100 mt-2 py-3 px-3 text-blue rounded-lg bg-light-grey border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label 
                              htmlFor="message"
                              className="hidden">{language.contact.forms.message[idiom]}
                            </label>
                            <textarea 
                              type="textarea"
                              name="message"
                              id="message"
                              onChange={handleInputChange}
                              placeholder={language.contact.forms.message[idiom]}
                              className="w-100 h-32 mt-2 py-3 px-3 text-blue rounded-lg bg-light-grey border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                        </div>
                        <button 
                          type="submit" 
                          value="Send" 
                          className="md:w-32 bg-white hover:bg-orange text-blue font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300 self-center md:self-end">
                          {language.contact.forms.btn[idiom]}
                        </button>
                    </form>
                    <div className="place-self-center md:mb-12 sm:rounded-lg">
                        <div className="flex items-center justify-center md:justify-start mt-8 text-white">
                          <a 
                            href='https://www.linkedin.com/in/luizfcmodolo/'
                            target="_blank"
                            rel="noreferrer"
                            className='flex items-center text-md tracking-wide font-semibold text-light-grey hover:text-orange'>
                            <SiLinkedin className='text-3xl mr-4' /> /luizfcmodolo
                          </a>
                        </div>
                        <div className="flex items-center justify-center md:justify-start mt-8 text-white">
                          <a 
                            href='https://github.com/LuizModolo'
                            target="_blank"
                            rel="noreferrer"
                            className='flex items-center text-md tracking-wide font-semibold text-light-grey hover:text-orange'>
                            <SiGithub className='text-3xl mr-4' /> /LuizModolo
                          </a>
                        </div>
                        <div className="flex items-center justify-center md:justify-start mt-8 text-white">
                          <a 
                            href='mailto:modolo.luiz@gmail.com?'
                            target="_blank"
                            rel="noreferrer"
                            className='flex items-center text-md tracking-wide font-semibold text-light-grey hover:text-orange'>
                            <HiOutlineMail className='text-3xl mr-4' /> modolo.luiz@gmail.com
                          </a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a 
          href='#home'
          data-aos="zoom-in"
          className='flex flex-col items-center text-base lg:text-lg tracking-wide font-medium text-light-grey hover:text-yellow mb-10 md:mb-12'>
          <BsChevronDoubleUp className='text-5xl' />{language.contact.back[idiom]}
        </a>
      </div>
      <div className='bg-brush-yellow min-w-full min-h-[80px]'/>
    </section>
  )
}