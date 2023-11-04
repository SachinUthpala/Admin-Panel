import React from 'react'
import Update from './Updates/Update'
import './RightSide.css'

function RightSide() {
  return (
    <div className="rightSide">
        <div>
            <h3>Updates</h3>
            <Update/>
        </div>
        <div>
            <h3>Customer Review</h3>
        </div>
    </div>
  )
}

export default RightSide