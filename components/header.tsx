import React from 'react'
import Logo from './logo'

const Header = () => {
  return (
    <header className='bg-white'>
        <div className='py-8 flex items-center mx-auto max-w-screen-2xl justify-between px-4'>
            <Logo />
        </div>
    </header>
  )
}

export default Header