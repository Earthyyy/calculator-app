import React from 'react'
import Key from './Key'
import KEYPAD from '../constants'


const Keypad = () => {
  return (
    <div className='p-6 bg-toggle grid grid-cols-4 place-content-center gap-[0.8125rem] rounded-[.625rem]text'>
        {KEYPAD.map((key,idx) => (
            <Key key={idx} {...key} />
        ))}
    </div>
  )
}

export default Keypad