import React from 'react'
import FrontPage from './FrontPage';
import VideoPlayerPage from "./VideoPlayerPage"
import { Route, Routes } from 'react-router';
import ErrorPage from './ErrorPage';



function App() {


  return (
    <div>

    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/Video" element={<VideoPlayerPage />} />
      <Route path="/error" element={<ErrorPage />} />
    </Routes>
    </div>
  )
}

export default App