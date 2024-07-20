import React, { useState } from 'react'
import VideoCardList from './VideoCardList'
import { useSearchParams } from 'react-router-dom';
import SearchBar from './SearchBar';
import UploadForm from './UploadForm';

function FrontPage() {

    const [ShowModal, setShowModal] = useState(false)
    const [Timeout, setTimeoutState] = useState(0)
    
    const [searchParams , setSearchParams] = useSearchParams();
    const [Results, setResults] = useState([0]);
    const [CdnUrl, setCdnUrl] = useState("")

    let VideoListApiKey = searchParams.get('Vidkey')
    const UploadKey = searchParams.get("UpKey")
  
  return (
    <div className='select-none overflow-auto overflow-x-clip relative flex flex-col w-screen h-screen items-center bg-offwhite font-mono'>
        
        <UploadForm ShowModal={ShowModal} setShowModal={setShowModal} Timeout={Timeout} setTimeoutState={setTimeoutState} ApiKey={UploadKey} />
        

        <div className='w-full h-full'>
            <SearchBar ApiKey={VideoListApiKey} Results={Results} setResults={setResults} setCdnUrl={setCdnUrl}/>

            <VideoCardList setShowModal={setShowModal} Results={Results} url={CdnUrl}/>

        

    </div>
    </div>
  )
}

export default FrontPage