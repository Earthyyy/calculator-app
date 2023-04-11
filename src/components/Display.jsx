import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
  const input = useSelector(state => state.input.value);

  return (
    <div className='bg-screen flex items-center justify-end px-6 rounded-xl h-[5.5rem] desktop:h-[8rem]'>
        <span className={`text-[2.5rem]/[2.3125rem] tracking-[-0.666667px] desktop:text-[3.5rem]/[3.22rem] desktop:tracking-[-.93px] text-header`}>{input}</span>
    </div>
  )
}

export default Display