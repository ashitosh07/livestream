import React, { useEffect } from 'react'

export const Skills = () => {
  useEffect(() => {
    // Function to create a new iFrame for the livestream chat
    const insertChatFrame = () => {
      const livevid = document.createElement('iframe')
      livevid.src = 'https://www.youtube.com/live_chat?v=YOUR_VIDEO_ID' // Replace YOUR_VIDEO_ID with the actual video ID if needed
      livevid.width = '100%'
      livevid.height = '100%'
      document.getElementById('chatframe').appendChild(livevid)
    }

    // Function called when the YouTube IFrame API is ready
    const onYouTubeIframeAPIReady = () => {
      const player = new window.YT.Player('live-video', {
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      })

      function onPlayerReady(event) {
        event.target.playVideo()
        insertChatFrame()
      }

      function onPlayerStateChange(event) {
        // You can handle player state changes if needed
      }
    }

    // Load the YouTube IFrame Player API asynchronously
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    // Cleanup function to remove the created iFrame when the component unmounts
    return () => {
      const chatFrame = document.getElementById('chatframe')
      if (chatFrame) {
        chatFrame.innerHTML = '' // Remove the chat iFrame
      }
    }
  }, []) // Run this effect only once when the component mounts

  return (
    <div>
      {/* Livestream Video */}
      {/* <iframe
        id='live-video'
        src='https://livestream.hr/player/'
        title='Livestream Player'
        width='100%'
        height='100%'
        frameBorder='0'
        allow='accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture'
        allowFullScreen
      ></iframe> */}

      {/* Chat Frame */}
      <div id='chatframe'></div>
    </div>
  )
}

export default Skills
