import React, { useRef, useState } from 'react'
import tom from './assets/tomm-removebg-preview.png'
import jerry from './assets/clipart1575198.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {
  const tomRef = useRef(null);
  const jerryRef = useRef(null);
  const flyerRef = useRef(null);

  const [moveX, setMoveX] = useState(null)
  const [moveY, setMoveY] = useState(null)

  const tomMove = (e) => {
    tomRef.current.style.left = e.clientX + 'px'
    tomRef.current.style.top = e.clientY + 'px'
  }

  useGSAP(() => {
    gsap.to(jerryRef.current, {
      top : moveY + 'px',
      left : moveX + 'px' 
    })
  },[moveX,moveY]);

  const jerryMove = () => {
    const xPosition = gsap.utils.random(0,600,100);
    const yPosition = gsap.utils.random(0,300,75);
    setMoveX(xPosition);
    setMoveY(yPosition);
  }

  const jerryCaught = () => {
    flyerRef.current.style.display = 'flex'
  }


  return (
    <div className='main' onMouseMove={(e) => {tomMove(e)}}>
      <img ref={tomRef} src={tom}  alt="" />
      <img onClick={jerryCaught} onMouseEnter={jerryMove} ref={jerryRef} src={jerry} alt="" />
      <div ref={flyerRef} className="flyer">
        <h2>Jerry Caught✅</h2>
      </div>
    </div>
  )
}

export default App