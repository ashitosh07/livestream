import React, { useEffect, useRef, useState } from 'react'
import './Project.css'
import placeholderVideo from '../../src/assets/img/reel.mp4'
import { Container } from 'react-bootstrap'

function Projects() {
  return (
    <section className='project' id='project'>
      <Container>
        <div
          className='p-10 relative'
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
                  <div
                    class='plyr__video-embed'
                    id='player'
                    dangerouslySetInnerHTML={{
                      __html: `
                        <iframe
                          src="https://livestream.hr/player/?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
                          allowfullscreen
                          allowtransparency
                          allow="autoplay"
                        ></iframe>`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Projects
