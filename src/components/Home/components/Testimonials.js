import './Testimonials.scss'
import Slider from "react-slick";

export default function Testimonials() {
    const settings = {
        // dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <>
            <div className='tongtestimon'>
                <div className='tongtestimon1'>
                    <h1 className='textteminol'>TESTIMONIALS</h1>
                    <hr className='gachduoitextteminol'></hr>
                    <Slider {...settings} className="slider">
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur.
                            </p>
                            <p><i>- Morgan F. -</i></p>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur.
                            </p>
                            <p><i>- Morgan F. -</i></p>

                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur.
                            </p>
                            <p><i>- Morgan F. -</i></p>

                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur.
                            </p>
                            <p><i>- Morgan F. -</i></p>

                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur.
                            </p>
                            <p><i>- Morgan F. -</i></p>

                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur.
                            </p>
                            <p><i>- Morgan F. -</i></p>

                        </div>
                    </Slider>
                </div>

            </div>
        </>
    )
}