import React from 'react'

function Header({title}) {
  return (
    <div className='headers'>
      <h2 className='h_title'>{title}</h2>
      <p className='h_description'>Explore our complete range of automotive services designed to meet all your transportation needs.</p>
    </div>
  )
}

export default Header
