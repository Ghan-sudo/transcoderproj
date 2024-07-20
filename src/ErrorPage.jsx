import React from 'react'

function ErrorPage() {
  return (
    <div className='select-none overflow-auto overflow-x-clip relative flex w-screen h-screen justify-center items-start bg-offwhite font-mono text-indigo'>
        
        <div className='hover:bg-red mt-64 text-5xl font-bold text-center'>
            Hey, <br></br>
            You probably ran out of Api Calls.
            <br></br>
            Interview me if you want another key
        </div>
        
    </div>
  )
}

export default ErrorPage