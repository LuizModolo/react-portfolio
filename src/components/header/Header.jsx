import { useContext } from 'react';
import Context from '../../context/Context';
import Language from '../../services/Language';
import SwitchLanguage from './switchLanguage';

 
export default function Header() {
  const {
    language,
  } = useContext(Context);

  return (
    <header className="flex px-4 py-8 mx-auto bg-orange w-screen h-6 items-center lg:flex-row lg:justify-between lg:h-14 sticky top-0">
      <div>
        <h1 className="text-dark-blue basis-4/12 font-semibold text-2xl pl-6 lg:pl-24">{'<Luiz Módolo />'}</h1>
      </div>
      <div className="hidden space-x-8 lg:basis-7/12 lg:flex lg:flex-row lg:justify-end lg:pr-16">
        {Language.header[language].map((a) => (
            <a key={a} href={a} id={a} className="pl-8 font-medium text-lg menu-item hover:text-white">{a}</a>
        ))}
        <SwitchLanguage />
      </div>
      <div class="flex lg:hidden">
        <div class="space-y-2">
          <span class="block w-8 h-0.5 bg-dark-blue-600 animate-pulse"></span>
          <span class="block w-8 h-0.5 bg-dark-blue-600 animate-pulse"></span>
          <span class="block w-8 h-0.5 bg-dark-blue-600 animate-pulse"></span>
        </div>
      </div>
    </header>
  )
}
