import React from 'react'
import './Comments.css'
import one from '../../../assets/img/1.png'

function Comments() {
  return (
    <div className='comments'>
      <div className="comment">
        <div className="comment-header">
          <img src={one} alt="" />
          <h5>Nwoye Luke Nnamdi</h5>
          <p>1/2/2025</p>
        </div>
        <div className="comment-text">
          <p>Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Quod odio dolor earum.</p>
        </div>
      </div>
      <div className="comment">
        <div className="comment-header">
          <img src={one} alt="" />
          <h5>Nwoye Luke Nnamdi</h5>
          <p>1/2/2025</p>
        </div>
        <div className="comment-text">
          <p>Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Quod odio dolor earum.</p>
        </div>
      </div>
      <div className="comment">
        <div className="comment-header">
          <img src={one} alt="" />
          <h5>Nwoye Luke Nnamdi</h5>
          <p>1/2/2025</p>
        </div>
        <div className="comment-text">
          <p>Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Quod odio dolor earum.</p>
        </div>
      </div>
      <div className="comment">
        <div className="comment-header">
          <img src={one} alt="" />
          <h5>Nwoye Luke Nnamdi</h5>
          <p>1/2/2025</p>
        </div>
        <div className="comment-text">
          <p>Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Quod odio dolor earum.</p>
        </div>
      </div>
    </div>
  )
}

export default Comments
