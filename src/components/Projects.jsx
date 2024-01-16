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

  const handleToggleMute = () => {
    setMuted((prevMuted) => {
      if (videoRef.current) {
        videoRef.current.muted = !prevMuted
      }
      return !prevMuted
    })
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
                    controls
                    preload='auto'
                    autoplay='autoplay'
                    loop
                    muted
                    playsInline
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
