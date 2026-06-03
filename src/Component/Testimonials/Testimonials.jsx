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
    name: 'William Jackson',
    image: user_1,
    company: 'Edusity, USA',
    testimony:
      "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
  },
  {
    name: 'John Doe',
    image: user_2,
    company: 'Edusity, USA',
    testimony:
      "The learning environment is outstanding. The lecturers are knowledgeable and always willing to help students succeed in their academic journey."
  },
  {
    name: 'Jane Doe',
    image: user_3,
    company: 'Edusity, USA',
    testimony:
      "From modern facilities to a welcoming community, Edusity has provided me with opportunities that have helped me grow both academically and personally."
  },
  {
    name: 'Sarah Johnson',
    image: user_4,
    company: 'Edusity, USA',
    testimony:
      "I am grateful for the support and mentorship I received throughout my studies. It has been a rewarding and transformative experience."
  },
  {
    name: 'Jane Doe',
    image: user_3,
    company: 'Edusity, USA',
    testimony:
      "From modern facilities to a welcoming community, Edusity has provided me with opportunities that have helped me grow both academically and personally."
  },
  {
    name: 'Sarah Johnson',
    image: user_4,
    company: 'Edusity, USA',
    testimony:
      "I am grateful for the support and mentorship I received throughout my studies. It has been a rewarding and transformative experience."
  },
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
