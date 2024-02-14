import Image from 'next/image'
import Logo from '../../../../public/logo_Light.png'
import React from 'react'

const logo = () => {
  return (
	  <Image 
    src={Logo}
    alt="Logo"
    className={" w-100 h-auto"}
    priority={true} // Add the priority property
    />
  )
}

export default logo
