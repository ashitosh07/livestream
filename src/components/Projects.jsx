import React, { useEffect, useRef, useState } from 'react'
import './Project.css'
// import mainbg from '../../../assets/mainbg.png'
// import frameImg from '../../../assets/frameimg.png'
import placeholderVideo from '../../src/assets/img/reel.mp4'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
function Projects() {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.error('Autoplay prevented:', error)
        })
      }
    }

    // Play the video when the component mounts
    playVideo()

    // Cleanup function to pause the video when the component is unmounted
    return () => {
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }
  }, [])

  const handleVideoClick = () => {
    const video = document.getElementById('livestreamVideo')
    if (video) {
      video.play().catch((error) => {
        // Autoplay failed, handle the error or provide a user prompt
        console.error('Autoplay failed:', error)
      })
    }
  }

  return (
    <section className='project' id='project'>
      <Container>
        <div
          className=' p-10 relative'
          style={{
            backgroundColor: 'black',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          id='reel'
        >
          <div className='video-container'>
            <div className='video-item'>
              <div className='item'>
                <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                  <iframe
                    src='https://livestream.hr/player/'
                    style={{
                      border: 'none',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      width: '100%',
                    }}
                    allow='accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;'
                    allowfullscreen='true'
                  ></iframe>
                </div>
              </div>
            </div>
          </div>{' '}
          <div className='video-container'>
            <div className='video-item'>
              <div className='item'>
                <div
                  style={{ position: 'relative', paddingTop: '56.25%' }}
                  onClick={handleVideoClick}
                >
                  <iframe
                    id='livestreamVideo'
                    title='Livestream Player'
                    src='https://livestream.hr/player/'
                    style={{
                      border: 'none',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      width: '100%',
                    }}
                    controls
                    preload='auto'
                    loop
                    muted
                    playsInline
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className='video-container'>
            <div className='video-item'>
              <div className='item'>
                <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                  <iframe
                    src='https://customer-miw9mt3gg9tkxmg2.cloudflarestream.com/d6cc2c89511c9354508fd2ed9aa0b088/iframe'
                    style={{
                      border: 'none',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      width: '100%',
                    }}
                    allow='accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;'
                    allowfullscreen='true'
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          {/* <button onClick={handleToggleMute} className='mute-toggle'>
        {muted ? 'Unmute' : 'Mute'}
      </button> */}
        </div>{' '}
      </Container>
    </section>
  )
}

export default Projects
