import { useContext } from 'react';
import Context from '../../context/Context';
import Switch from "react-switch";
import { CircleFlag } from 'react-circle-flags'

export default function Header() {
  const {
    language,
    setLanguage,
    checked,
    setChecked
  } = useContext(Context);

  const handleLanguage = () => {
    if (language === 'english') {
      setLanguage('portuguese')
      setChecked(false)
    }
    if (language === 'portuguese') {
      setLanguage('english')
      setChecked(true)
    }
  }

  const BrFlag = () => <CircleFlag countryCode="br" height="26" />
  const GbFlag = () => <CircleFlag countryCode="gb" height="26" />

  return (
    <div className="basis-1/12 flex justify-end pr-16">
      <Switch
        checked={checked}
        onChange={handleLanguage}
        uncheckedHandleIcon={<BrFlag />}
        checkedHandleIcon={<GbFlag />}
        onHandleColor='#021f30'
        offHandleColor='#021f30'
        onColor='#021f30'
        offColor='#021f30'
        uncheckedIcon={false}
        checkedIcon={false}
      />
    </div>
  )
}