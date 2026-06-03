import React from 'react'
import './Title.css'

function Title({Title,subTitle}) {
  return (
    <div className='title container'>
        <p>{Title}</p>
        <h2>{subTitle}</h2>
    </div>
  )
}

export default Title
