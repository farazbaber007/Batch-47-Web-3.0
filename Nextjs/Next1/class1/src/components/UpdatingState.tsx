"use client";
import React, {useState} from 'react'

// Counter App
function UpdatingState() {
    const [value, setValue] = useState(0);
    //const value =0 
    const increment = ()=> {
      //value = value + 1;
      setValue(value+1);
      console.log(value);
    };
    const decrement = ()=> {
      //value = value -1;
      setValue(value-1);
      console.log(value);
    };

  return (
    <div className='flex gap-5  justify-center items-center'>
        <button className='bg-blue-500 text-slate-100 rounded-xl   p-2' onClick={increment}> Increase </button>
        {value}
        <button className='bg-red-500 text-slate-100 rounded-xl  p-2' onClick={decrement} > Decrease </button>
    </div>
  )
}

export default UpdatingState