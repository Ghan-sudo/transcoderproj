import React from 'react'
import { useLocation } from 'react-router';
//import dashjs from 'dashjs'
import { Replay } from 'vimond-replay';
import 'vimond-replay/index.css';
import ShakaVideoStreamer from 'vimond-replay/video-streamer/shaka-player';

//import {ControlBar} from "./ControlBar"

function VideoPlayerPage() {

/*    function init() {
        var url = 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd';
        var videoElement = document.querySelector('video');
        var player = dashjs.MediaPlayer().create();

        player.extend("RequestModifier", () => {
            return {
                modifyRequestHeader: xhr => {
                    // do xhr.setRequestHeader type stuff here ...
                    xhr.withCredentials = true;
                    return xhr;
                },
                modifyRequestURL: url => {
                    // modify url as you need - add querystring etc ...
                    return url;
                }
            };
        },
        true
    );
     */

       // player.initialize(videoElement, url, true);
        //var controlbar = new ControlBar(player);
        //controlbar.initialize(); "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd"
   //}

   const location = useLocation()
   const { url } = location.state

    const replayOptions = {
        videoStreamer: {
          shakaPlayer: {
            requestFilter: (type, request) => {
                //request.allowCrossSiteCredentials = true;
            },
            responseFilter: (type, request) => {},
          }
        }
      };
    
   //useEffect( ()=>{init()}, [] )
//<video controls='true' />
//<br></br>
  return (
    <div className='z-0 relative py-20 h-screen w-screen bg-offwhite flex items-center justify-center'>
        <div className='w-3/4 mb-64'>
          <Replay source={url} initialPlaybackProps={{ isPaused: true }} options={replayOptions} >
            <ShakaVideoStreamer />
          </Replay>
        </div>
    </div>
  )
}

export default VideoPlayerPage