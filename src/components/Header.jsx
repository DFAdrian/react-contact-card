import React from "react";
import Mail from '../assets/Mail.png'
import Img from '../Assets/Profile.jpg'
import LinkedIn from '../Assets/linkedin.png'

export default function Header(){
    return(
        <header className='card__header'>
            <img className='card__img' src={Img} />
            <h1 className='card__title'>Adrian Donate</h1>
            <h3 className='card__job'>Frontend Developer</h3>
            <a className='card__web' href='https://github.com/DFAdrian' target="_blank" rel="noopener noreferrer">adriandf.website</a>
            <div className='card__btns'>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" rel="noopener noreferrer" target="_blank" className='btn'>
                <img className='btn__img' src={Mail} />
                Email
                </a> 
                <a href='https://www.linkedin.com/in/adrian-donate-96b993217?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZ9cZ49hPTxCF10Ah9KGUGg%3D%3D' target='_blank' className='btn btn--blue' rel="noopener noreferrer">
                <img className='btn__img' src={LinkedIn} />
                LinkedIn
                </a> 
            </div>
        </header>
    )
}

