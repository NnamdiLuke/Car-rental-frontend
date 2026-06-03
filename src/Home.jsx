import { useState } from "react"
import Hero from "./Component/Hero/Hero"
import Navbar from "./Component/Navbar/Navbar"
import OtherServices from "./Component/otherservices/page"
import Footer from "./Component/footer/page"
import Testimonials from "./Component/Testimonials/Testimonials"
import Contact from "./Component/Contact/Contact"
import Title from "./Component/Title/Title"
import CarGallery from "./Component/Cars/CarGallery"

function Home() {
    const [displayBooking, setDisplayBooking] = useState(false)
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title Title='Cars' subTitle='Our Fleet Of Cars' />
      <CarGallery displayBooking={displayBooking} setDisplayBooking={setDisplayBooking}/>
      <Title Title='Other Services' subTitle='Other services we render'/>
      <OtherServices/>
      <Title Title='Testimonials' subTitle='What customers Says'/>
      <Testimonials/>
      <Title Title='Contact Us' subTitle='Get in Touch'/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
