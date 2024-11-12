import React,{useState, useEffect, useRef} from 'react'
import './Project.css'
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Typed from 'typed.js';
import { NavLink } from "react-router-dom";
function Project() {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [feedback, setFeedback] = useState({ name: '', mobile: '', email: '', comment: '' });
    const carouselRef = useRef(null);
    const slideIntervalTime = 2000;
    const slideInterval = useRef(null);

    useEffect(() => {
      slideInterval.current = setInterval(showNextSlide, slideIntervalTime);
      return () => clearInterval(slideInterval.current);
    }, []);

    const showNextSlide = () => {
      const items = carouselRef.current?.querySelectorAll('.carousel-item');
      if (items && items.length) {
        setCarouselIndex((prevIndex) => (prevIndex + 1) % items.length);
      }
    };

    const showPrevSlide = () => {
      const items = carouselRef.current?.querySelectorAll('.carousel-item');
      if (items && items.length) {
        setCarouselIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
      }
    };

    const updateCarousel = () => {
      const items = carouselRef.current?.querySelectorAll('.carousel-item');
      if (items && items.length) {
        items.forEach((item, index) => {
          item.classList.toggle('active', index === carouselIndex);
        });
      }
    };

    useEffect(() => {
      updateCarousel();
    }, [carouselIndex]);

    // View more
    const view_more = () => {
      document.querySelector('.para_btn').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit';
    };

    const remove_this = () => {
      document.querySelector('.para_btn').innerHTML = '';
    };

    // Post feedback
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFeedback({ ...feedback, [name]: value });
    };

    const postFeedback = async () => {
      try {
        const response = await fetch('http://localhost:3001/feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(feedback),
        });
        if (response.status === 201) {
          alert('Thanks for your feedback!');
        } else {
          throw new Error(response.statusText);
        }
      } catch (error) {
        alert(error);
      }
    };
    const typedRef = useRef(null);
    useEffect(() => {
      const typed = new Typed(typedRef.current, {
        strings: ["𝕯𝖍𝖆𝖇𝖆𝕻𝖔𝖎𝖓𝖙 !"],
        typeSpeed: 150,
        backSpeed: 180,
        loop: true,
      });

      // Cleanup
      return () => {
        typed.destroy();
      };
    }, []);

  return (
    <div>
      <div id="body">
    <div className="top-image" id="first">
      <div className="image-bac">
        <video autoPlay loop muted plays-inline>
          <source src="./image2/demoPic.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="top-center">
        <h1 className="heading1" id="h1" style={{color: '#fff' ,font: 45 }}>
          𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓽𝓸 <span ref={typedRef} className="auto-type" />
        </h1>
      </div>
      <div className="top-center-two">
        <div className="box1">
          <h4 className="heading2" id="h4" style={{color: '#fff', font: 35 }}>
            Catering service available
          </h4>
          </div>
        <div className="box2">
          <div className="inside">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="currentColor"
              className="bi bi-bag-plus"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5"
              />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
            </svg>
            <h3>TakeAway</h3>
          </div>
          <h2>Pick Your Order From</h2>
          <p>
            {" "}
            SCO 265, Sector 35D, Sector 35,
            <br /> Chandigarh, 160036
          </p>
          <button className="btn btn-danger">
            <a href="z.html" style={{ textDecoration: "none", color: "#fff" }}>
              Order Online
            </a>
          </button>{" "}
          <br />
          <a href="">Or view the menu dirctly</a>
        </div>
      </div>
    </div>
    <div className="row text-center" id="row-two">
      <div className="col-lg-4 col-md-6 col-sm-6 text1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="currentColor"
          id="clock"
          className="bi bi-clock"
          viewBox="0 0 16 16"
        >
          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
        </svg>
        <br />
        Opening Hour <br />
        08:00 - 01:00
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 text2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="currentColor"
          className="bi bi-telephone-plus"
          viewBox="0 0 16 16"
        >
          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
          <path
            fillRule="evenodd"
            d="M12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5"
          />
        </svg>
        <br />
        Phone <br />
        01362595226, 9875698462
      </div>
      <div className="col-lg-4 col-md-12 col-sm-6 mb-3 text3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="currentColor"
          className="bi bi-geo-alt"
          viewBox="0 0 16 16"
        >
          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        </svg>
        <br />
        Location <br />
        SCO 258, Sector 15, <br />
        Chandigarh, 190036
      </div>
    </div>
  </div>
  <br />
  <br />
  <section id="services-container2" className="services-container">
    <div id="myCarousel" ref={carouselRef} className="carousel slide carousel-fade" data-ride="carousel">
      <div className='carousel-inner'>
        <div className="carousel-item active">
          <div className="mask flex-center">
            <div className="container">
              <div id="rowLine" className="row align-items-center drag-down">
                <div className="col-md-7 col-12 order-md-1 order-2">
                  <h4>
                    Food
                    <br /> Delivery
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis
                    quidem rerum <br />
                    necessitatibus praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <a href="#">read more</a>
                </div>
                <div className="col-md-5 col-12 order-md-2 order-1 ">
                  <img
                    src="./image2/image3.gif"
                    height="320px"
                    width="350px"
                    className="mx-auto "
                    alt="slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="mask flex-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-7 col-12 order-md-1 order-2">
                  <h4>
                    Food <br /> Ordering
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis
                    quidem rerum <br />
                    necessitatibus praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <a href="#">BUY NOW</a>
                </div>
                <div className="col-md-5 col-12 order-md-2 order-1">
                  <img
                    src="./image2/image11.gif"
                    height="320px"
                    width="320px"
                    className="mx-auto"
                    alt="slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="mask flex-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-7 col-12 order-md-1 order-2">
                  <h4>
                    Present your <br /> awesome product
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis
                    quidem rerum <br />
                    necessitatibus praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <a href="#">BUY NOW</a>
                </div>
                <div className="col-md-5 col-12 order-md-2 order-1">
                  <img
                    src="./image2/img12.gif"
                    height={300}
                    width={300}
                    className="mx-auto"
                    alt="slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a
        className="carousel-control-prev"
        href="#myCarousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#myCarousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </section>
  <br /> <br />
  <div className="text-center">
    <h1 id="hh1">𝓞𝓾𝓻 𝓑𝓮𝓼𝓽 𝓟𝓸𝓹𝓾𝓵𝓪𝓻 𝓡𝓮𝓬𝓲𝓹𝓮𝓼</h1>
    <br />
    <br />
    <div className="row">
      <div className="col-lg-2" />
      <div className="col-lg-3 col-md-6 col-sm-12 text-center">
        <div id="c-container">
          <img
            className="image"
            src="./image2/breakfast.jpg"
            alt=""
            style={{ borderRadius: 5 }}
            height="400px"
            width="330px"
          />
          <div className="overlay">
            <div className="text">
              <h3>Breakfast</h3>
            </div>
          </div>
        </div>
        <br />
        <br />
        <button id="btnMenu" className="" style={{ height: 60, width: 100 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
          <br />
          <a href="menu.html">Show More</a>
        </button>
        <br />
        <br />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 text-center">
        <div id="c-container">
          <img className='image'
            src="./image2/lunch.webp"
            alt=""
            style={{ borderRadius: 5 }}
            height="400px"
            width="330px"
          />
          <div className="overlay">
            <div className="text">
              <h3>Lunch</h3>
            </div>
          </div>
        </div>
        <br />
        <br />
        <button
          id="btnMenu"
          className="bbtn"
          style={{ height: 60, width: 100 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
          <br />
          <a href="menu.html">Show More</a>
        </button>
        <br />
        <br />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 text-center">
        <div id="c-container">
          <img className='image'
            src="./image2/dinner.jpg"
            alt=""
            style={{ borderRadius: 5 }}
            height="400px"
            width="330px"
          />
          <div className="overlay">
            <div className="text">
              <h3>Dinner</h3>
            </div>
          </div>
        </div>
        <br />
        <br />
        <button id="btnMenu" className="" style={{ height: 60, width: 100 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
          <br />
          <a href="menu.html">Show More</a>
        </button>
        <br />
        <br />
      </div>
      <div className="col-lg-2" />
    </div>
  </div>
  <div className="container">
    <div id="dish" className="row new">
      <div className="col-lg-2" />
      <div className="col-lg-4 col-md-2 col-sm-12">
        <h1 id="hhh1">𝓐𝓫𝓸𝓾𝓽 𝓞𝓾𝓻 𝓓𝓲𝓼𝓱𝓮𝓼</h1>
        <h4 id="hh4">Order Distribution</h4>
        <p id="pp1">
          Dhaba, a word that comes to our mind when we talk about tasty and
          spicy food. A vast network of roads connects India. It forms the
          economic backbone of our great nation as passenger and commercial
          traffic moves along the well laid tarmac tracks. along the highways
          buzzing with traffic activity, dhabas have mushroomed.
        </p>
        <button
          className="btn btn-danger"
          id="myButton"
          onclick="changeColor()"
        >
          <a
            href="p.about.html"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Read More
          </a>
        </button>
      </div>
      <div className="col-lg-4 col-md-2 col-sm-12">
        <br />
        <img
          src="./image2/eating.jpg"
          alt=""
          height="280px"
          text-align="center"
        />
      </div>
      <div className="col-lg-2" />
    </div>
  </div>
  <br />
  <br />
  <div className="container" id="chefs">
    <h1>𝓞𝓾𝓻 𝓒𝓱𝓮𝓯𝓼</h1>
    <br />
    <br />
    <div className="row">
      <div className="col-lg-1" />
      <div className="col-lg-5">
        <img
          className="cheff-img"
          src="./image2/image1.jpg"
          alt=""
          height={200}
          width={200}
          style={{ borderRadius: 100, alignItems: "center" }}
        />
        <h1 className="cheff-h1" style={{ textAlign: "center" }}>
          Sanjeev Kapoor
        </h1>
        <br />
        <h3 className="cheff-h3" style={{ textAlign: "center" }}>
          MASTER CHEFF
        </h3>
        <br />
        <p className="cheff-p" style={{ textAlign: "center" }}>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. Separated they live in Bookmarksgrove right at the
          coast of the Semantics, a large language ocean. It is a paradisematic
          country.
        </p>
      </div>
      <div className="col-lg-5">
        <img
          className="cheff-img"
          src="./image2/chef2.jpg"
          alt=""
          height={200}
          width={200}
          style={{ borderRadius: 100, alignItems: "center" }}
        />
        <h1 className="cheff-h1" style={{ textAlign: "center" }}>
          Pankaj Bhadouria
        </h1>
        <br />
        <h3 className="cheff-h3" style={{ textAlign: "center" }}>
          MASTER CHEFF
        </h3>
        <br />
        <p className="cheff-p" style={{ textAlign: "center" }}>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. Separated they live in Bookmarksgrove right at the
          coast of the Semantics, a large language ocean. It is a paradisematic
          country.
        </p>
      </div>
      <div className="col-lg-1" />
    </div>
  </div>
  <br />
  <br />
  <div className="col-lg-12 col-md-12 col-sm-12" id="top-image2">
    <div className="pic_of_out">
      <img
        className="food6"
        src="./image2/inside.jpg"
        style={{ filter: "blur(2px)" }}
        alt=""
        height="700px"
        width="100%"
      />
    </div>
    <div className="text_over">
      <h1 style={{ color: "#fff" }}>𝕺𝖚𝖗 𝕸𝖊𝖓𝖚</h1>
      <br />
      <br />
      <div className="row" id="menus">
        <div className="col-lg-6" id="cols1">
          <table style={{ width: "60%", border: "double" }}>
            <tbody>
              <tr>
                <th style={{ border: "double", padding: 8 }}>Item</th>
                <th style={{ border: "double", padding: 8 }}>Price</th>
              </tr>
              <tr>
                <td style={{ border: "double", padding: 8 }}>Aloo Posto</td>
                <td style={{ border: "double", padding: 8 }}>50 $</td>
              </tr>
              <tr>
                <td style={{ border: "double", padding: 8 }}>Chicken 65</td>
                <td style={{ border: "double", padding: 8 }}>120 $</td>
              </tr>
              <tr>
                <td style={{ border: "double", padding: 8 }}>Navaratna</td>
                <td style={{ border: "double", padding: 8 }}>90 $</td>
              </tr>
              <tr>
                <td style={{ border: "double", padding: 8 }}>Fish Curry</td>
                <td style={{ border: "double", padding: 8 }}>100 $</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-6" id="cols2">
          <table style={{ width: "60%", border: "double" }}>
            <tbody>
              <tr>
                <th style={{ border: "double", padding: 8 }}>Item</th>
                <th style={{ border: "double", padding: 8 }}>Price</th>
              </tr>
              <tr>
                <td style={{ border: "double", padding: 8 }}>Aloo Posto</td>
                <td style={{ border: "double", padding: 8 }}>50 $</td>
              </tr>
              <tr>
                <td style={{ border: "double", padding: 8 }}>Chicken 65</td>
                <td style={{ border: "double", padding: 8 }}>120 $</td>
              </tr>
              <tr>
                <td style={{ border: "double", padding: 8 }}>Navaratna</td>
                <td style={{ border: "double", padding: 8 }}>90 $</td>
              </tr>
              <tr>
                <td style={{ border: "double", padding: 8 }}>Fish Curry</td>
                <td style={{ border: "double", padding: 8 }}>100 $</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <br />
      <button
        id="btnn"
        className="btn btn-danger"
        style={{ width: "auto", height: 70, borderRadius: 20, fontSize: 20 }}
      >
        <a href="z.html" style={{ textDecoration: "none", color: "#fff" }}>
          View Full Menu
        </a>
      </button>
    </div>
    <br />
    <p className="fs-5">
      {" "}
      Welcome to DhabaPoint. You can spent your precious time to your partner
      with enjoying food and as well as your close friend also.{" "}
    </p>
    <br />
    <button
      className="btn btn-outline-success"
      id="btn_view"
      onMouseOver={view_more}
      onMouseOut={remove_this}
    >
      View More
    </button>
    <p className="para_btn fs-5" />
  </div>
  <div className="forth">
    <div className="contact" id='contact'>
      <div>
        <h1>Please Give a Suggestion</h1>
        <p>
          Start for free, If you've made it this far, you must be at least a
          little curious. Fill your details below and take the first step toward
          your goals. Learn coding, practice it by building projects with us.
          Get the source code of projects. For videos and tutorials, subscribe
          to our YouTube channel, follow us on Instagram and like our Facebook
          page.
        </p>
      </div>
      <div className="rating">
        <div className="container" id="react">
          <div className="star-widget">
            <input type="radio" name="radio" id="rate-5" />
            <label htmlFor="rate-5">
              <i className="fa-duotone fa-solid fa-star" />
            </label>
            <input type="radio" name="radio" id="rate-4" />
            <label htmlFor="rate-4">
              <i className="fa-duotone fa-solid fa-star" />
            </label>
            <input type="radio" name="radio" id="rate-3" />
            <label htmlFor="rate-3">
              <i className="fa-duotone fa-solid fa-star" />
            </label>
            <input type="radio" name="radio" id="rate-2" />
            <label htmlFor="rate-2">
              <i className="fa-duotone fa-solid fa-star" />
            </label>
            <input type="radio" name="radio" id="rate-1" />
            <label htmlFor="rate-1">
              <i className="fa-duotone fa-solid fa-star" />
            </label>
            <form action="#">
              <header style={{ textAlign: "center" }} />
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <img src="https://static.wixstatic.com/media/11062b_3e6ada1a4e114f129f480d2ca4a86250~mv2.png/v1/fill/w_505,h_459,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Email.png" alt=""/>
        </div>
        <div className="col-lg-6" id="form">
          <form onsubmit="PostFeed()" style={{ paddingTop: 100 }}>
            <label htmlFor="name">Name* : </label>
            <input type="text" name="" id="name" />
            <br />
            <br />
            <label htmlFor="mobile">Mob no* : </label>
            <input type="phone" name="" id="mobile" />
            <br />
            <br />
            <label htmlFor="name">Email* : </label>
            <input type="text" name="" id="email" />
            <br />
            <br />
            <label htmlFor="comment">comment* : </label>
            <textarea
              name="text"
              id="comment"
              placeholder="Leave a comment"
              style={{ backgroundColor: "#212121", color: "#fff" }}
              defaultValue={""}
            />
            <br />
            <br />
            <button className="btn btn-outline-success" id="bbtn">
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
    <div id='map'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13068.625594588091!2d76.65282199999999!3d30.514603999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e1!3m2!1sen!2sin!4v1725450208098!5m2!1sen!2sin"
        width="100%"
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    <div className="footer last" id='last'>
      <div className="link">
        <span>Get connected with us on social networks:</span>
        <div className="icons">
          <a href="" className="me-4 link-secondary">
            <i className="bi bi-facebook" />
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="bi bi-twitter" />
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="bi bi-instagram" />
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="bi bi-linkedin" />
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="bi bi-github" />
          </a>
        </div>
      </div>
      <div className="last_row">
        <div className="text-center element0">
          <img src="./image2/foodd.png" alt="" height="60px" width="70px" />
          <h1>DhabaPoint</h1>
        </div>
        <div className="text-center element1">
          <h4 className="und">Delivary Timing</h4>
          <p>
            08:00 AM - 23:00 AM <br /> Everyday
          </p>
        </div>
        <div className="text-center element2">
          <h4 className="und">Services</h4>
          <p>
            <a href="#!" className="text-reset">
              Pricing
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              privacy policy
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              FAQ
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              Help
            </a>
          </p>
        </div>
        <div className="text-center element3">
          <h4 className="und">Contact:</h4>
          <p>
            <i className="fas fa-home me-3 text-secondary" />
            Punjab,14411
          </p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary" />
            deypartha2004@gmail.com
          </p>
          <p>
            <i className="fas fa-phone me-3 text-secondary" /> + 01 234 567 88
          </p>
          <p>
            <i className="fas fa-print me-3 text-secondary" /> + 01 234 567 89
          </p>{" "}
        </div>
        <br />
        <p className="text-center copy">
          Copyright <span>© </span>2024 DhabaPoint . All rights reserved
        </p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Project
