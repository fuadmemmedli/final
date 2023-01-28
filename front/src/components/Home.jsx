import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import imgSlider from '../img/slider.jpg'
import crudCart from "../img/course_1.jpg"
import { FaBeer } from 'react-icons/fa';
import cartimg from '../img/author.jpg'
import bCg from '../img/bcg.jpg'
import carts from '../img/im.jpg'
import {Helmet} from "react-helmet";
const Home = () => {
  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>HOME PAGE</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

    <div className='coursel'>
           <Carousel>
                <div>
                    <img src={imgSlider} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={imgSlider} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={imgSlider}  />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

    </div>
    <div className="slider__up">
        <div className="slider__up1">
        <FaBeer />
        <h1>Online Courses <br /><p>VIEW MORE</p></h1>

        </div>
        <div className="slider__up2">
        <FaBeer />
        <h1>Online Courses <br /><p>VIEW MORE</p></h1>
        </div>
        <div className="slider__up3">
        <FaBeer />
        <h1>Online Courses <br /><p>VIEW MORE</p></h1>
        </div>
        
    </div>
    <div className="home__crud">
        <div className="home__crud__xtt">

        </div>
        <div className="home__crud__txt">
            <h1>Popular Courses</h1>

        </div>
        <div className="home__crud__continer">

        
            <div className="home__crud__carts1">
                <img src={crudCart} alt="" />
                <h2>A complete guide to design</h2>
                <p>Adobe Guide, Layes, Smart Objects etc...</p>
                <div className="home__crud__carts1__bottom">
                    <div className="home__crud__carts1__bottom__img">
                        <img src={cartimg} alt="" />

                    </div>
                    <div className="home__crud__carts1__bottom__txt">
                        <p>Michael Smith, Author</p>

                    </div>
                    <div className="home__crud__carts1__bottom__num">
                        <h3>$50</h3>

                    </div>

                </div>


            </div>
            <div className="home__crud__carts2">
            <img src={crudCart} alt="" />
                <h2>A complete guide to design</h2>
                <p>Adobe Guide, Layes, Smart Objects etc...</p>
                <div className="home__crud__carts2__bottom">
                    <div className="home__crud__carts2__bottom__img">
                        <img src={cartimg} alt="" />

                    </div>
                    <div className="home__crud__carts2__bottom__txt">
                        <p>Michael Smith, Author</p>

                    </div>
                    <div className="home__crud__carts2__bottom__num">
                        <h3>$50</h3>

                    </div>

                </div>



            </div>
            <div className="home__crud__carts3">
            <img src={crudCart} alt="" />
                <h2>A complete guide to design</h2>
                <p>Adobe Guide, Layes, Smart Objects etc...</p>
                <div className="home__crud__carts3__bottom">
                    <div className="home__crud__carts3__bottom__img">
                        <img src={cartimg} alt="" />

                    </div>
                    <div className="home__crud__carts3__bottom__txt">
                        <p>Michael Smith, Author</p>

                    </div>
                    <div className="home__crud__carts3__bottom__num">
                        <h3>$50</h3>

                    </div>

                </div>

            </div>


        </div>

    </div>
    <div className="home__body">
        <div className="home__body__left">
            <h1>Register now and get a discount <br /> 50% discount  until 1 January</h1>
            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor <br /> nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. <br /> Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
            <button>REGISTER NOW</button>

        </div>
        <div className="home__body__right">
            <h1>Search for your course</h1>
            <input type="text" placeholder='Course Name'/><br />
            <input type="text" placeholder='Category'/><br />
            <input type="text" placeholder='Degree' /><br />
            <button>SEARCH COURSE</button>


        </div>
        



    </div>
    <div className="home__servic">
        <div className="home__servic__xtt">

        </div>
        <div className="home__servic__txt">
            <h1>Our Services</h1>

        </div>
        <div className="home__servic__continer">
            <div className="home__servic__continer__carts1">
                <div className="home__servic__continer__cart1">
                    <FaBeer/>
                    <h2>Online Courses</h2>
                    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum <br /> nulla, vitae tempor nisl ligula vel nunc. Proin quis mi <br /> malesuada, finibus tortor fermentum.</p>

                </div>
                <div className="home__servic__continer__cart2">
                <FaBeer/>
                    <h2>Online Courses</h2>
                    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum <br /> nulla, vitae tempor nisl ligula vel nunc. Proin quis mi <br /> malesuada, finibus tortor fermentum.</p>

                </div>
                <div className="home__servic__continer__cart3">
                <FaBeer/>
                    <h2>Online Courses</h2>
                    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum <br /> nulla, vitae tempor nisl ligula vel nunc. Proin quis mi <br /> malesuada, finibus tortor fermentum.</p>

                </div>

            </div>
            <div className="home__servic__continer__carts2">
            <div className="home__servic__continer__cart4">
            <FaBeer/>
                    <h2>Online Courses</h2>
                    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum <br /> nulla, vitae tempor nisl ligula vel nunc. Proin quis mi <br /> malesuada, finibus tortor fermentum.</p>

             </div>
              <div className="home__servic__continer__cart5">
              <FaBeer/>
                    <h2>Online Courses</h2>
                    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum <br /> nulla, vitae tempor nisl ligula vel nunc. Proin quis mi <br /> malesuada, finibus tortor fermentum.</p>

              </div>
             <div className="home__servic__continer__cart6">
             <FaBeer/>
                    <h2>Online Courses</h2>
                    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum <br /> nulla, vitae tempor nisl ligula vel nunc. Proin quis mi <br /> malesuada, finibus tortor fermentum.</p>

              </div>

            </div>


        </div>


    </div>
    <div className="events">
        <div className="events__xtt">

        </div>
        <div className="events__txt">
            <h1>Upcoming Events</h1>

        </div>
        <div className="events__continer">
            <div className="events1">
                <div className="events__num">
                    <h1>07</h1><h3>January</h3>

                </div>
                <div className="events__lorem">
                    <h2>Student Festival</h2>
                    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula <br /> vel nunc. Proin quis mi malesuada, finibus tortor.</p>


                </div>
                <div className="events__img">
                  <img src={carts} alt="" />
                </div>

            </div>





            <div className="events2">
            <div className="events__num2">
                    <h1>07</h1><h3>January</h3>

                </div>
                <div className="events__lorem2">
                    <h2>Student Festival</h2>
                    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula <br /> vel nunc. Proin quis mi malesuada, finibus tortor.</p>


                </div>
                <div className="events__img2">
                  <img src={carts} alt="" />
                </div>
                
                </div>



                <div className="events3">
                <div className="events__num3">
                    <h1>07</h1><h3>January</h3>

                </div>
                <div className="events__lorem3">
                    <h2>Student Festival</h2>
                    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula <br /> vel nunc. Proin quis mi malesuada, finibus tortor.</p>


                </div>
                <div className="events__img3">
                  <img src={carts} alt="" />
                </div>
                
                </div>

        </div>
    </div>

    </div>
  )
}

export default Home