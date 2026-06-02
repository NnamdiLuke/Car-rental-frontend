import { useState } from "react"
import Hero from "./Component/Hero/Hero"
import Navbar from "./Component/Navbar/Navbar"
import CarBookingGallery from "./Component/CarBookingGallery/CarBookingGallery"
import Header from "./Component/headers/Header"
import OtherServices from "./Component/otherservices/page"
import Footer from "./Component/footer/page"

function Home() {
    const [displayBooking, setDisplayBooking] = useState(false)
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Header title='Our Fleet Of Cars'/>
      <CarBookingGallery displayBooking={displayBooking} setDisplayBooking={setDisplayBooking}/>
      <Header title='Our Other Services'/>
      <OtherServices/>
      <Footer/>
    </div>
  )
}

export default Home
