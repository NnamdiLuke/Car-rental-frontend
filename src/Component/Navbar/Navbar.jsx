import React, { useEffect, useState,useRef } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import car_rental from '../../assets/car_rental.png'
import menu_icon from '../../assets/menu-icon.png'

function Navbar() {
  const [sticky, setSticky] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const menuRef = useRef(null)

  useEffect(() =>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])
  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      mobileMenu &&
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !event.target.classList.contains('menu-icon')
    ) {
      setMobileMenu(false)
    }
  }

  document.addEventListener('mousedown', handleClickOutside)

  return () => {
    document.removeEventListener('mousedown', handleClickOutside)
  }
}, [mobileMenu])

  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <nav className={`container ${sticky ? 'dark-nav':''}`}>
      <div className='logo-container'>
        <img src={car_rental} alt="Logo" className='logo' />
        <h2>CAR RENTAL</h2>
      </div>
      <ul className={mobileMenu ? '': 'hide-mobile-menu'} ref={menuRef}>
        <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={() =>setMobileMenu(false)}>Home</Link></li>
        <li><Link to='cars' smooth={true} offset={0} duration={500} onClick={() =>setMobileMenu(false)}>Cars</Link></li>
        <li><Link to='services' smooth={true} offset={0} duration={500} onClick={() =>setMobileMenu(false)}>Services</Link></li>
        <li><Link to='testimonials' smooth={true} offset={0} duration={500} onClick={() =>setMobileMenu(false)}>Testimonials</Link></li>
        <li><Link className='btn' to='contact' smooth={true} offset={-260} duration={500} onClick={() =>setMobileMenu(false)}>Contact Us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
