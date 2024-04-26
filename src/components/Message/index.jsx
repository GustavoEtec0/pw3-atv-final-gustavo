import React, { useEffect, useState } from 'react'
import './style.css'

export default function Message({ type, msg }) {
  const [visible, setVisible] = useState(false)

  function isVisible() {
    if (!msg) {
      setVisible(false)
      return
    }
    setVisible(true)
  }

  function timerVisible() {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }

  useEffect(() => {
    isVisible()
    timerVisible()
  }, [msg])

  return (
    <>
      {visible && (
        <div className={`message ${[type]}`}>
          <p>{msg}</p>
        </div>
      )}
    </>
  )
}
