import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './CarBookingGallery.css'
import hilux from '../../assets/cars/2015_hilux.jpg' 
import Land_Cruiser_300_series from '../../assets/cars/2021_Land_Cruiser_300_series.jpg' 
import BMW_X3_car_model from '../../assets/cars/BMW-X3-car-model.jpg' 
import BMW_5_Series_Sedan_car_model from '../../assets/cars/BMW-5-Series-Sedan-car-model.jpg' 
import es from '../../assets/cars/es.jpg' 
import IS from '../../assets/cars/IS.jpg' 
import lbx from '../../assets/cars/lbx.jpg' 
import lc from '../../assets/cars/lc.jpg' 
import ls from '../../assets/cars/ls.jpeg'
import location from '../../assets/location-dot-solid.svg'
import Data from '../../Data'
import Button from './Button'
import Card from './Card'

function CarBookingGallery({displayBooking,setDisplayBooking}) {
    const [item, setItem] = useState(Data)
    const buttonItems = [...new Set(Data.map((val)=>val.category))]
    
    const filterItems = (cat) =>{
        const newItems = Data.filter((newVal) => newVal.category ===cat)
        setItem(newItems)
    }
  return (
    <div className='container' id='cars'>
        <div className="category-wrapper">
          <Button
            buttonItems={buttonItems}
            filterItems={filterItems}
            setItem={setItem}
          />
        </div>
        <Card 
          item={item}
          displayBooking={displayBooking}
          setDisplayBooking={setDisplayBooking}
        />
    
    
    
    </div>

    
  )
}

export default CarBookingGallery
