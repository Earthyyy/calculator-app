import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'

const Header = () => {
  return (
    <header className='flex justify-between items-center'>
        <h1 className='text-[2rem]/[1.8125rem] text-header'>calc</h1>

        <ThemeSwitcher />
    </header>
  )
}

export default Header