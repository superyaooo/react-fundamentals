import logo from '../assets/Logo.jpg'
import {logo as logoClass} from './Banner.module.css'

const Banner = ({children}) => {
  return (
    <header className='row mb-4'>
      <div className='col-5'>
        <img src={logo} alt="logo" className={logoClass}/>
      </div>
      <div className='col-7 mt-5 themeFontColor'>
        {children}
      </div>
    </header>
  );
}

export default Banner;