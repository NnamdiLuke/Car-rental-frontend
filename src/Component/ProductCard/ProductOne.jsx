import React from 'react'
import './ProductOne.css'
import Data from '../../Data'
import Land_Cruiser_300_series from '../../assets/cars/2021_Land_Cruiser_300_series.jpg' 
import BMW_X3_car_model from '../../assets/cars/BMW-X3-car-model.jpg' 
import BMW_5_Series_Sedan_car_model from '../../assets/cars/BMW-5-Series-Sedan-car-model.jpg' 
import es from '../../assets/cars/es.jpg' 
import IS from '../../assets/cars/IS.jpg' 
import lbx from '../../assets/cars/lbx.jpg'
import { FaStar } from 'react-icons/fa'


function ProductOne() {
  return (
    <div className="container">
        <div className='gallery'>

<div className="content">
    <img src={Land_Cruiser_300_series} alt="" />
    <h3>Land Cruiser</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur enim laudantium quos.</p>
    <h6>$100.00</h6>
    <ul>
        <li>
            <FaStar className='star checked'/>
            <FaStar className='star checked'/>
            <FaStar className='star checked'/>
            <FaStar className='star checked'/>
            <FaStar className='star'/>
        </li>
    </ul>
    <button className="buy-1">Buy Now</button>
</div>
<div className="content">
    <img src={BMW_X3_car_model} alt="" />
    <h3>BMW X3</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur enim laudantium quos.</p>
    <h6>$400.00</h6>
    <ul>
        <li>
        <li>
            <FaStar className='star checked'/>
            <FaStar className='star checked'/>
            <FaStar className='star checked'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
        </li>
        </li>
    </ul>
    <button className="buy-2">Buy Now</button>
</div>
<div className="content">
    <img src={BMW_5_Series_Sedan_car_model} alt="" />
    <h3>BMW 5 Series</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur enim laudantium quos.</p>
    <h6>$200.00</h6>
    <ul>
        <li>
            <FaStar className='star checked'/>
            <FaStar className='star checked'/>
            <FaStar className='star checked'/>
            <FaStar className='star checked'/>
            <FaStar className='star'/>
        </li>
    </ul>
    <button className="buy-3">Buy Now</button>
</div>
<div className="content">
    <img src={es} alt="" />
    <h3>Es</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur enim laudantium quos.</p>
    <h6>$70.00</h6>
    <ul>
        <li>
            <FaStar className='star checked'/>
            <FaStar className='star checked'/>
            <FaStar className='star checked'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
        </li>
    </ul>
    <button className="buy-4">Buy Now</button>
</div>

</div>
    </div>
  )
}

export default ProductOne
