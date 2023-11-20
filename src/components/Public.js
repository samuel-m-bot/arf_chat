import React from 'react'
import { Link } from 'react-router-dom'

const Public = () => {
  return (
    <div>
        <h1>Welcome to ARF Chat Interface</h1>
        <Link to="/chat">
            <button type="button" className="welcome_content_text_button">
                Chat interface
            </button>
        </Link>
    </div>
  )
}

export default Public