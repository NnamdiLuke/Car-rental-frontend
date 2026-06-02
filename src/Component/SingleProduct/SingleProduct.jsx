import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './SingleProduct.css'
import one from '../../assets/img/1.png'
import two from '../../assets/img/2.png'
import three from '../../assets/img/3.png'

function SingleProduct() {
    const [image, setImage] = useState(2)
  return (
    <section class="main-wrap">
        <div class="product">
            <div class="image-gallery">
                {image === 0 ? (
                    <img src={one} id="productImg" alt=""/>
                ): image === 1 ? (
                    <img src={two} id="productImg" alt=""/>
                ): image === 2 ? (
                    <img src={three} id="productImg" alt=""/>
                ): <img src={one} id="productImg" alt=""/>}
                <div class="controls">
                    <span 
                        onClick={()=>setImage(0)} 
                        class={`controls_btn ${image === 0 ? 'active':''}`}
                    ></span>
                    <span 
                        onClick={()=>setImage(1)} 
                        class={`controls_btn ${image === 1 ? 'active':''}`}
                    ></span>
                    <span
                        onClick={()=>setImage(2)} 
                        class={`controls_btn ${image === 2 ? 'active':''}`}
                    ></span>
                </div>
            </div>
            <div class="product-details">
                <div class="details">
                    <h2>Edgar Moran Kobhy Chair</h2>
                    <h3>$150.00</h3>
                    <h4>35% OFF</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quibusdam est illum, unde adipisci neque impedit, enim accusantium incidunt non ipsum, repellat blanditiis. Ullam autem, non quod quo tenetur corrupti.</p>
                </div>
                <div class="sizes">
                    <form class="form">
                        <div class="select-size">
                            <h3>Size:</h3>
                            <label for="sm">
                                <input type="radio" name="size" id="sm"/>
                                <span>S</span>
                            </label>
                            <label for="m">
                                <input type="radio" name="size" id="m"/>
                                <span>M</span>
                            </label>
                            <label for="lg">
                                <input type="radio" name="size" id="lg"/>
                                <span>L</span>
                            </label>
                            <label for="xl">
                                <input type="radio" name="size" id="xl"/>
                                <span>XL</span>
                            </label>
                            <label for="xxl">
                                <input type="radio" name="size" id="xxl"/>
                                <span>XXL</span>
                            </label>
                        </div>   
                    </form>
                </div>
                <div class="colors">
                    <form class="form">
                        <div class="select-color">
                            <h3>Color:</h3>
                            <label for="red">
                                <input type="radio" name="color" id="red"/>
                                <span class="color-1"></span>
                            </label>
                            <label for="green">
                                <input type="radio" name="color" id="green"/>
                                <span class="color-2"></span>
                            </label>
                            <label for="blue">
                                <input type="radio" name="color" id="blue"/>
                                <span class="color-3"></span>
                            </label>
                            <label for="yellow">
                                <input type="radio" name="color" id="yellow"/>
                                <span class="color-4"></span>
                            </label>
                        </div>   
                    </form>
                </div>
                <div class="quantity">
                    <div class="select-quantity">
                        <h3>Quantity:</h3>
                        <input type="number" name="quantity" value="1"/>
                    </div>
                </div>
                <div class="sub-btn">
                    <button class="submit">Buy Now</button>
                </div>
            </div>
        </div>

    </section>
  )
}

export default SingleProduct
