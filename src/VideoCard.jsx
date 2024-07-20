import React from 'react'
import { Link } from 'react-router-dom'

function VideoCard({VidUrl, Thumbnail, Title, ID, Status}) {
  return (
    <Link to="/Video" state={{ url: VidUrl}} >
    <div className="cursor-pointer group hover:bg-red hover:text-indigo visited:bg-mint relative z-0 w-80 h-80 bg-indigo text-offwhite flex flex-col text-xl mx-2 ml-0 mr-0 mt-0">

        <div className='w-full h-full grow flex flex-col items-center'>
            
            <div className='p-0.5 mb-0 w-full h-3/5'>
                <img crossOrigin="anonymous" className="w-full h-full group-hover:saturate-100 saturate-50" alt="Thumbnail" src={Thumbnail}  />
            </div>

            <div className='grow w-full flex flex-col items-start '>

                <div className='mb-2 text-pretty w-full pt-2 flex justify-center'>
                    <div>
                        {Title}
                    </div>
                    
                </div>
                <div className= 'grow flex w-full'>

                    <div className="grow h-full pl-2 text-pretty flex pr-1 items-end">
                        ID : {ID}
                    </div>

                    <div className='pl-1 grow text-pretty pr-2 flex flex-row-reverse items-end'>
                        <div className=''>
                            Status : {Status}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default VideoCard