import React from 'react'
import hilux from '../../assets/cars/2015_hilux.jpg' 
import locationIcon from '../../assets/location-dot-solid.svg'
import { useDispatch } from 'react-redux';
import { setSelectedCar } from '../../redux/actions';


function Card({item,displayBooking,setDisplayBooking}) {
    const dispatch = useDispatch();

    const handleBookNowClick = (car) => {
        dispatch(setSelectedCar(car));
        setDisplayBooking(!displayBooking);
    };
  return (
    <div className="car-gallery">
        {item.map((value) =>(
        <div key={value.id} className="car-card">
            <img src={value.img} alt="" />
            <div className="car-card-details">
                <div className="card-header">
                    <p>
                        <span className="car-price">
                        ${value.price}/day
                        </span>

                        <span>
                        <img src={locationIcon} alt="" />
                        {value.location}
                        </span>
                    </p>
                </div>
                <h3>{value.title}</h3>
                <div
                    className="button"
                    onClick={() => handleBookNowClick(value)} 
                    >
                    <button>Book Now</button>
                </div>
            </div>
        </div>

        ))}
        
    </div>
  )
}

export default Card
