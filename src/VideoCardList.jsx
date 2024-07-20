import React from 'react'
import VideoCard from './VideoCard'
import UploadCard from './UploadCard'

function VideoCardList({setShowModal, Results, url}){

  let Items = []

    Items = Results.map( (item) => {
      let VidUrl = ""
      if(item["status"] === "done"){
        VidUrl = url + "/" + item["VID"] + ".mpd"
      }
      return <VideoCard VidUrl={VidUrl} Thumbnail={url + "/"+item["img"]} Title={item["title"]} ID={item["VID"]} Status={item["status"]} key={Number(item["VID"])} />} )



  return (
    <div className='gap-2 ml-2 flex justify-start items-start content-start w-full h-full flex-wrap'>

        <UploadCard setShowModal={setShowModal}/>
          {
            Items
          }

    </div>
  )
}

export default VideoCardList