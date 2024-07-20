import React from 'react'
import FrontPage from './FrontPage';
import VideoPlayerPage from "./VideoPlayerPage"
import { Route, Routes } from 'react-router';
import ErrorPage from './ErrorPage';



function App() {


  return (
    <div>

    <Routes>
      <Route exact path="/" element={<FrontPage />} />
      <Route exact path="/Video" element={<VideoPlayerPage />} />
      <Route exact path="/error" element={<ErrorPage />} />
    </Routes>
    </div>
  )
}

export default App