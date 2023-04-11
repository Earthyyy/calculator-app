import React from 'react'
import Key from './Key'
import KEYPAD from '../constants'


const Keypad = () => {
  return (
    <div className='p-6 desktop:py-8 desktop:px-[1.875rem] bg-toggle grid grid-cols-4 place-content-center gap-[0.8125rem] desktop:gap-6 rounded-[.625rem]'>
        {KEYPAD.map((key,idx) => (
            <Key key={idx} {...key} />
        ))}
    </div>
  )
}

export default Keypad