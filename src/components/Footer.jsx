import React from 'react'
import Twitter from '../Assets/Twitter.png'
import Facebook from '../Assets/Facebook.png'
import Insta from '../Assets/Instagram.png'
import GitHub from '../Assets/GitHub.png'

export default function Footer(){
    return(
        <footer className='card__footer'>
            <a href='#'><img className='footer__social' src={Twitter} /></a>
            <a href='#'><img className='footer__social' src={Facebook} /></a>
            <a href='#'><img className='footer__social' src={Insta} /></a>
            <a href='https://github.com/DFAdrian' target='_blank' rel="noopener noreferrer"><img className='footer__social' src={GitHub} /></a>
        </footer>
    )
}