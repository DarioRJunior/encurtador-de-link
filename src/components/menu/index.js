import './menu.css';
import { BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs'
import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <div className='menu'>
           <a className='social' href='https://github.com/DarioRJunior' target="_blank">
           <BsGithub color='#FFF' size={24}/>
           </a>
           <a className='social' href='https://www.linkedin.com/in/dariocode/' target="_blank">
           <BsLinkedin color='#FFF' size={24}/>
           </a>
           <a className='social' href='https://www.instagram.com/dario.code/' target="_blank">
           <BsInstagram color='#FFF' size={24}/>
           </a>
           <Link className='menu-item' to="/links">
            Meus Links
           </Link>
        </div>
    )
}