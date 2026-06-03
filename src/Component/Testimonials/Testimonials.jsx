import React, { useRef, useState } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/img/testimonial/next-icon.png'
import back_icon from '../../assets/img/testimonial/back-icon.png'
import user_1 from '../../assets/img/testimonial/user-1.png'
import user_2 from '../../assets/img/testimonial/user-2.png'
import user_3 from '../../assets/img/testimonial/user-3.png'
import user_4 from '../../assets/img/testimonial/user-4.png'

const testimonials = [
  {
    name: "Michael Johnson",
    image: user_1,
    company: "Abuja, Nigeria",
    testimony:
      "The booking process was quick and straightforward. The vehicle was clean, well-maintained, and exactly as described. Their customer service team was professional and responsive throughout my trip. I will definitely use their service again."
  },
  {
    name: "Sarah Williams",
    image: user_2,
    company: "Lagos, Nigeria",
    testimony:
      "I needed a reliable car for a business trip, and this company exceeded my expectations. The car was delivered on time, fuel-efficient, and very comfortable. The entire experience was seamless from pickup to return."
  },
  {
    name: "David Okafor",
    image: user_3,
    company: "Port Harcourt, Nigeria",
    testimony:
      "Excellent service and affordable pricing. The rental process was transparent with no hidden charges. The vehicle performed perfectly during my family vacation, making our journey safe and enjoyable."
  },
  {
    name: "Grace Eze",
    image: user_4,
    company: "Enugu, Nigeria",
    testimony:
      "I was impressed by the variety of vehicles available and the professionalism of the staff. The SUV I rented was in excellent condition and made my weekend trip stress-free. Highly recommended for anyone looking for dependable car rentals."
  }
];
function Testimonials() {
    const slider = useRef();
    const [current, setCurrent] = useState(0);

    const itemsPerView = window.innerWidth <= 768 ? 1 : 2;

    const maxIndex = testimonials.length - itemsPerView;

    const slideForward = () => {
    if (current < maxIndex) {
        const next = current + 1;
        setCurrent(next);
        slider.current.style.transform = `translateX(-${next * (100 / itemsPerView)}%)`;
    }
    };

    const slideBackward = () => {
    if (current > 0) {
        const prev = current - 1;
        setCurrent(prev);
        slider.current.style.transform = `translateX(-${prev * (100 / itemsPerView)}%)`;
    }
    };

    // let tx = 0;

    // const slideForward = ()=>{
    //     if(tx > -50){
    //         tx -= 25;
    //     }
    //     slider.current.style.transform = `translateX(${tx}%)`;
    // }
    // const slideBackword = ()=>{
    //     if(tx < 0){
    //         tx += 25;
    //     }
    //     slider.current.style.transform = `translateX(${tx}%)`;
    // }
  return (
    <div className="container" id='testimonials'>
        <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
            {testimonials.map((item, index) => (
                <li key={index}>
                <div className="slide">
                    <div className="user-info">
                    <img src={item.image} alt={item.name} />
                    <div>
                        <h3>{item.name}</h3>
                        <span>{item.company}</span>
                    </div>
                    </div>

                    <p>{item.testimony}</p>
                </div>
                </li>
            ))}
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Testimonials
