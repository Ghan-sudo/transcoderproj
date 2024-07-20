import React from 'react'

function UploadCard({setShowModal}) {
  return (
    <div onClick={() => {setShowModal(true)}} className="cursor-pointer group hover:bg-red hover:text-indigo  relative z-0 w-80 h-80 bg-indigo text-offwhite flex flex-col text-xl mb-2 ml-0 mr-0 mt-0 items-center justify-center" >


        Click Here To <br></br>Upload Video 
        
        </div>
  )
}

export default UploadCard