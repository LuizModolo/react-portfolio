import { useContext } from 'react';
import Context from '../../context/Context';
import Language from '../../services/Language'
import SwitchLanguage from './switchLanguage'

 
export default function Header() {
  const {
    language,
  } = useContext(Context);

  return (
    <header className="flex flex-row w-screen h-14 bg-orange items-center sticky">
      <h1 className="text-dark-blue basis-4/12 pl-24 font-semibold text-2xl">{'<Luiz Módolo/>'}</h1>
      <section className="basis-7/12 flex flex-row justify-end">
        {Language.header[language].map((a) => (
            <a key={a} href={a} className="pl-10 font-medium text-lg">{a}</a>
        ))}
      </section>
      <SwitchLanguage />
    </header>
  )
}
