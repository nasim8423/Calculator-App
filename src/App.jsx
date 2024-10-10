import React, { useState } from 'react'

const App = () => {
  
  const [value, setValue] = useState('')

  const getData = (e) => {
    setValue(value + e.target.value)
  }

  // const calculation = () => {
  //   setValue(eval(value).toString())
  // }


  return (
    <div className='bg-slate-950 text-white min-h-screen flex justify-center items-center'>
      <div className='bg-slate-400 p-5 w-[300px] rounded-md '>
        <h1 className='text-center  text-black font-[700]  text-3xl mb-4'>Calculator App</h1>

        {/*-------- input-field ------*/}
        
        <div className=''>
          <input type="text" value={value}  className='w-full py-4 px-4 bg-gray-600 rounded-md focus:outline-none border-[3px] border-black text-right text-2xl font-bold'   />
        </div>

       {/*-------- button ------*/}
       <div>

        <div className='mt-3 flex justify-between'>
          <button onClick={()=>setValue("")} value="Ac"   className='w-14 h-14 bg-slate-900 border-2 rounded-md text-xl font-bold shadow-md shadow-orange-500' type='button'>Ac</button>
          <button onClick={()=>setValue(value.slice(0,-1))} className='w-14 h-14 bg-slate-900 border-2 rounded-md text-xl font-bold shadow-md shadow-orange-500' type='button'>Del</button>
          <button onClick={getData} value="%"  className='w-14 h-14 bg-slate-900 border-2 rounded-md text-xl font-bold shadow-md shadow-orange-500' type='button'>%</button>
          <button onClick={getData} value="/"  className='w-14 h-14 bg-slate-900 border-2 rounded-md text-xl font-bold shadow-md shadow-orange-500' type='button'>/</button>
        </div>

        <div className='mt-3 flex justify-between'>
          <button value="7" onClick={getData}  className='w-14 h-14 bg-slate-900 border-2 rounded-md text-xl font-bold shadow-md shadow-orange-500'type='button'>7</button>
          <button value="8" onClick={getData}  className='w-14 h-14 bg-slate-900 border-2 rounded-md text-xl font-bold shadow-md shadow-orange-500' type='button'>8</button>
          <button value="9" onClick={getData}  className='w-14 h-14 bg-slate-900 border-2 rounded-md text-xl font-bold shadow-md shadow-orange-500' type='button'>9</button>
          <button value="*" onClick={getData}  className='w-14 h-14 bg-slate-900 border-2 rounded-md text-xl font-bold shadow-md shadow-orange-500' type='button'>*</button>
        </div>

        <div className='mt-3 flex justify-between'>
          <button value="4" onClick={getData}  className='w-14 h-14 bg-slate-900 border-2 rounded-md text-xl font-bold shadow-md shadow-orange-500' type='button'>4</button>
          <button value="5" onClick={getData}  className='w-14 h-14 bg-slate-900 border-2 rounded-md text-xl font-bold shadow-md shadow-orange-500' type='button'>5</button>
          <button value="6" onClick={getData}  className='w-14 h-14 bg-slate-900 border-2 rounded-md text-xl font-bold shadow-md shadow-orange-500' type='button'>6</button>
          <button value="-" onClick={getData}  className='w-14 h-14 bg-slate-900 border-2 rounded-md text-xl font-bold shadow-md shadow-orange-500' type='button'>-</button>
        </div>

        <div className='mt-3 flex justify-between'>
          <button value="1" onClick={getData}  className='w-14 h-14 bg-slate-900 border-2 rounded-md text-xl font-bold shadow-md shadow-orange-500' type='button'>1</button>
          <button value="2" onClick={getData}  className='w-14 h-14 bg-slate-900 border-2 rounded-md text-xl font-bold shadow-md shadow-orange-500' type='button'>2</button>
          <button value="3" onClick={getData}  className='w-14 h-14 bg-slate-900 border-2 rounded-md text-xl font-bold shadow-md shadow-orange-500' type='button'>3</button>
          <button value="+" onClick={getData}  className='w-14 h-14 bg-slate-900 border-2 rounded-md text-xl font-bold shadow-md shadow-orange-500' type='button'>+</button>
        </div>

        <div className='mt-3 flex justify-between'>
          <button value="0" onClick={getData}  className='w-14 h-14 bg-slate-900 border-2 rounded-md text-xl font-bold shadow-md shadow-orange-500' type='button'>0</button>
          <button value="." onClick={getData}  className='w-14 h-14 bg-slate-900 border-2 rounded-md text-xl font-bold shadow-md shadow-orange-500' type='button'>.</button>
          <button  onClick={()=>setValue(eval(value).toString())}  className='w-28 h-14 bg-slate-900 border-2 rounded-md text-xl font-bold shadow-md shadow-orange-500' type='button'>=</button>
        
        </div>

        
       
       </div>
      </div>
    </div>
  )
}

export default App