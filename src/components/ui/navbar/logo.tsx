import React from 'react'
import s from './Navbar.module.css'
import Logo from '../../../../public/logo_Light.png'
import Image from 'next/image'


const logo = () => {
  return (
	  <Image src={Logo} alt="Logo" className={s.logo} />
  )
}

export default logo
