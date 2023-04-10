import React from 'react'
import Header from './Header'
import Display from './Display'
import Keypad from './Keypad'

const Calculator = () => {
  return (
    <div className="w-[20.4375rem] max-w-[33.75rem] grid gap-[2rem]">
        <Header/>
        <main className='grid gap-6'>
            <Display/>
            <Keypad/>
        </main>
    </div>
  )
}

export default Calculator