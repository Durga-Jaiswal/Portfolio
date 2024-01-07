
import React, { useState, useEffect } from 'react';

function Header() {
    
    const [scrolled,setScrolled] = useState(false);
      const handleScroll=() => {
          const offset=window.scrollY;
          if(offset > 200 ){
            setScrolled(true);
          }
          else{
            setScrolled(false);
          }
        }
      
        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
        
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);

        
      let navbarClasses=['header'];
        if(scrolled){
          navbarClasses.push('scrolled');
        }
return (
    <>
        <header className={scrolled ? 'header scrolled' : 'navbar'}
>
            <nav className='nav--container'>
                <a href="index.html" className='nav--logo'>Durga.</a>
                <div className='nav--menu'>
                    <ul className='nav--list grid'>
                        <li className='nav--item'>
                            <a href="#home" className='nav--link'>
                                <i className='uil uil-estate nav--icon'></i>Home
                            </a>
                        </li>
                        <li className='nav--item'>
                            <a href="#about" className='nav--link'>
                                <i className='uil uil-user nav--icon'></i>About
                            </a>
                        </li>
                        <li className='nav--item'>
                            <a href="#skills" className='nav--link'>
                                <i className='uil uil-file-alt nav--icon'></i>Skills
                            </a>
                        </li>
                        {/* <li className='nav--item'>
                            <a href="#services" className='nav--link'>
                                <i className='uil uil-briefcase-alt nav--icon'></i>Services
                            </a>
                        </li> */}
                        <li className='nav--item'>
                            <a href="#portfolio" className='nav--link'>
                                <i className='uil uil-scenery nav--icon'></i>Portfolio
                            </a>
                        </li>
                        <li className='nav--item'>
                            <a href="#contact" className='nav--link'>
                                <i className='uil uil-message nav--icon'></i>Contact
                            </a>
                        </li>
                    </ul>
                </div>
                   
            </nav>
        </header>
    </>
  )
}

export default Header