import React, { useState } from 'react'
import './Review.css'

function Review() {
    const [formHide, setFormHide] = useState(false)
    const handleForm = (e) =>{
        e.preventDefault()
        setFormHide(!formHide)
    }
  return (
    <div class="reviews">
        <div class={`post ${formHide ? 'active':''}`}>
            <div class="text">Thanks for rating us!</div>
            <div class="edit" onClick={()=>setFormHide(!formHide)}>EDIT</div>
        </div>
      <div class={`star-widget ${formHide ? 'hide':''}`}>
        <input type="radio" name="rate" id="rate-5"/>
        <label htmlFor="rate-5" class="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-4"/>
        <label htmlFor="rate-4" class="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-3"/>
        <label htmlFor="rate-3" class="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-2"/>
        <label htmlFor="rate-2" class="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-1"/>
        <label htmlFor="rate-1" class="fas fa-star"></label>
        <form onSubmit={handleForm} className=''>
          <header></header>
          <div class="textarea">
            <textarea cols="30" placeholder="Describe your experience.."></textarea>
          </div>
          <div class="submit_btn">
            <button type="submit">Post</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Review
