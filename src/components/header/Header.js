import React from 'react'
import './Header.css'

const Header = ({blackHeader}) => {
  return (
   <header className={blackHeader ? 'black' : ''}>
    <div className='header--logo'>
        <a href="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix" />
        </a>
    </div>
    <div>
        <a href="">
            <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="user" />
        </a>
    </div>
   </header>
  )
}

export default Header