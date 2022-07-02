import React from 'react';
import img1 from '../../assets/images/istockphoto-1301243910-170667a.jpg';
import img2 from '../../assets/images/wind-turbine-sunset-background-concept-eco-energy-wind-turbine-sunset-background-concept-eco-energy-power-135672596.jpg';
import img3 from '../../assets/images/Wind-turbines-Tehachapi-Calif.webp';
import './Slider.css';

const Slider = () => {
    return (
        <div className='slider_area'>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators custom_indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner custom_slider">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={img1} class="d-block w-100 " alt="..."/>
                        <div class="carousel-caption custom_caption d-none d-md-block">
                            <p>Some representative placeholder content for the first slide. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque neque officia ipsa voluptatem suscipit quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum porro perspiciatis a cum quos molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, molestias?</p>
                            <button type="submit" className='talk_submit'>Talk to Now</button>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={img2} class="d-block w-100 " alt="..."/>
                        <div class="carousel-caption custom_caption d-none d-md-block">
                            <p>Some representative placeholder content for the first slide. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque neque officia ipsa voluptatem suscipit quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum porro perspiciatis a cum quos molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, molestias?</p>
                            <button type="submit" className='talk_submit'>Talk to Now</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={img3} class="d-block w-100"  alt="..."/>
                        <div class="carousel-caption custom_caption d-none d-md-block">
                            <p>Some representative placeholder content for the first slide. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque neque officia ipsa voluptatem suscipit quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum porro perspiciatis a cum quos molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, molestias?</p>
                            <button type="submit" className='talk_submit'>Talk to Now</button>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon text-white" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>  
        </div>
    );
};

export default Slider;