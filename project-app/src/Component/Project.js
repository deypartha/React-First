import React from 'react'
import './Project.css'
function Project() {
  return (
    <div>
      <>
  <div className="container-fluid">
    <nav className="navbar navbar-expand-md bg">
      <div className="ddd1">
        <a className="navbar-brand" href="#">
          <img src="foodd.png" alt="" height="60px" width="70px" />
        </a>
        <h2 className="nav-h2">𝕯𝖍𝖆𝖇𝖆𝕻𝖔𝖎𝖓𝖙</h2>
      </div>
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#btn"
      >
        <i className="bx bx-menu menu" />
      </button>
      <div className="collapse navbar-collapse" id="btn">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a href="#" className="nav-link mx-3 fs-5 text">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link mx-3 fs-5 text">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link mx-3 fs-5 text">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link mx-3 fs-5 text">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="login.html" className="nav-link mx-3 fs-5 text">
              <i className="bx bx-user-circle icon" />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link mx-3 fs-5 text">
              <i className="bx bx-cart icon" />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link mx-3 fs-5 text">
              <i className="bx bx-search-alt icon" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <div className="top-image">
    <div className="image-bac">
      <video autoPlay="" loop="" muted="" plays-inline="">
        <source src="demoPic.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="top-center">
      <h1 className="heading1" id="h1" style={{ fontSize: 45 }}>
        𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓽𝓸 <span className="auto-type" />
      </h1>
    </div>
    <div className="top-center-two">
      <h4 className="heading2" id="h4" style={{ fontSize: 35 }}>
        Catering service available
      </h4>
      <p style={{ color: "#fff", fontSize: 20 }}>
        Restaurants/Dhabas are not just places to eat, they are also places to
        socialize, celebrate, and create memories. From fine dining
        establishments to hole-in-the-wall eateries, restaurants have captured
        the hearts and minds of people for generations. Here are 20 quotes that
        celebrate the magic of restaurants.
      </p>
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
  <br />
  <br />
  <div className="facility">
    <div className="row">
      <h1
        style={{
          textAlign: "center",
          fontFamily:
            '"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif'
        }}
      >
        𝓞𝓾𝓻 𝓕𝓮𝓪𝓽𝓾𝓻𝓮𝓼
      </h1>
      <div className="col-lg-3" />
      <div
        className="col-lg-2 col-md-4 col-sm-12 divfac"
        onmouseover="changeColor(this)"
        onmouseout="removeColor(this)"
        style={{
          border: "1px solid silver",
          padding: 20,
          margin: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <img
          src="food7.jpg"
          alt=""
          height={150}
          width="150px"
          style={{ borderRadius: 10, paddingBottom: 5 }}
        />
        <h1
          style={{
            fontFamily:
              '"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif',
            fontSize: 20,
            textAlign: "center"
          }}
        >
          Fresh And Organic
        </h1>
        <p style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <button
          className="btnRead"
          id="myButton"
          style={{ alignContent: "center" }}
          onclick="hideshow()"
        >
          Read More
        </button>
        <div id="cout" />
      </div>
      <div
        className="col-lg-2 col-md-4 col-sm-12 divfac"
        onmouseover="changeColor(this)"
        onmouseout="removeColor(this)"
        style={{
          border: "1px solid silver",
          padding: 20,
          margin: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <img
          src="food3.jpg"
          alt=""
          height={150}
          width="150px"
          style={{ borderRadius: 10, paddingBottom: 5 }}
        />
        <h1
          style={{
            fontFamily:
              '"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif',
            fontSize: 20,
            textAlign: "center"
          }}
        >
          Fast Delivery
        </h1>
        <p style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <button
          className="btnRead"
          id="myButton"
          style={{ alignContent: "center" }}
        >
          Read More
        </button>
      </div>
      <div
        className="col-lg-2 col-md-4 col-sm-12 divfac"
        onmouseover="changeColor(this)"
        onmouseout="removeColor(this)"
        style={{
          border: "1px solid silver",
          padding: 20,
          margin: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <img
          src="food4.webp"
          alt=""
          height={150}
          width="150px"
          style={{ borderRadius: 10 }}
        />
        <h1
          style={{
            fontFamily:
              '"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif',
            fontSize: 20,
            textAlign: "center"
          }}
        >
          Easy Pay
        </h1>
        <p style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <button
          className="btnRead"
          id="myButton"
          style={{ alignContent: "center" }}
        >
          Read More
        </button>
      </div>
      <div className="col-lg-3" />
    </div>
  </div>
  <br /> <br />
  <div>
    <div className="text-center">
      <h1 id="hh1">𝓞𝓾𝓻 𝓑𝓮𝓼𝓽 𝓟𝓸𝓹𝓾𝓵𝓪𝓻 𝓡𝓮𝓬𝓲𝓹𝓮𝓼</h1>
      <br />
      <br />
      <div className="row">
        <div className="col-lg-2" />
        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
          <img
            src="breakfast.jpg"
            alt=""
            style={{ borderRadius: 5 }}
            height="400px"
            width="330px"
          />
          <br />
          <br />{" "}
          <button
            className="btn btn-danger bbtn"
            onmouseover="bbtnover(this)"
            onmouseout="bbtnout(this)"
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
            Breakfast
          </button>
          <br />
          <br />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
          <img
            src="lunch.webp"
            alt=""
            style={{ borderRadius: 5 }}
            height="400px"
            width="330px"
          />
          <br />
          <br />{" "}
          <button
            className="btn btn-danger bbtn"
            onmouseover="bbtnover(this)"
            onmouseout="bbtnout(this)"
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
            Lunch
          </button>
          <br />
          <br />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
          <img
            src="dinner.jpg"
            alt=""
            style={{ borderRadius: 5 }}
            height="400px"
            width="330px"
          />
          <br />
          <br />{" "}
          <button
            className="btn btn-danger bbtn"
            onmouseover="bbtnover(this)"
            onmouseout="bbtnout(this)"
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
            Dinner
          </button>
          <br />
          <br />
        </div>
        <div className="col-lg-2" />
      </div>
    </div>
    <div className="container">
      <div className="row new">
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
          <button className="btnRead" id="myButton" onclick="changeColor()">
            Read More
          </button>
        </div>
        <div className="col-lg-4 col-md-2 col-sm-12">
          <br />
          <img
            src="https://i.ytimg.com/vi/Tt4_CUK7ClM/maxresdefault.jpg"
            alt=""
            height="280px"
            text-align="center"
          />
        </div>
        <div className="col-lg-2" />
      </div>
    </div>
  </div>
  <br />
  <br />
  <div className="container">
    <h1>𝓞𝓾𝓻 𝓒𝓱𝓮𝓯𝓼</h1>
    <br />
    <br />
    <div className="row">
      <div className="col-lg-1" />
      <div className="col-lg-5">
        <img
          className="cheff-img"
          src="chef1.jpeg"
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
          src="chef2.jpg"
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
    <h1>𝓞𝓾𝓻 𝓞𝓾𝓽𝓭𝓸𝓸𝓻 𝓢𝓲𝓽𝓽𝓲𝓷𝓰 𝓐𝓻𝓻𝓪𝓷𝓰𝓮𝓶𝓮𝓷𝓽𝓼</h1> <br />
    <img
      className="food6"
      src="res+tables.jpg"
      alt=""
      height="700px"
      width="100%"
    />
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
      onmouseover="view_more()"
      onmouseout="remove_this()"
    >
      View More
    </button>
    <p className="para_btn fs-5" />
  </div>
  <div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13068.625594588091!2d76.65282199999999!3d30.514603999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e1!3m2!1sen!2sin!4v1725450208098!5m2!1sen!2sin"
      width="100%"
      height={450}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />{" "}
  </div>
  <div className="footer last">
    <div className="last_row">
      <div className="text-center element0">
        <img src="foodd.png" alt="" height="60px" width="70px" />
        <h1>DhabaPoint</h1>
      </div>
      <div className="text-center element1">
        <h3 className="und">Delivary Timing</h3>
        <p>
          08:00 AM - 23:00 AM <br /> Everyday
        </p>
      </div>
      <div className="text-center element2">
        <h3 className="und">Info</h3>
        <p>
          Terms and conditions <br />
          Privacy Policy
        </p>
      </div>
      <div className="text-center element3">
        <h3 className="und">Address:</h3>
        <p>
          SCO 258, Sector 15, <br />
          Chandigarh, 190036, <br />
          01362595226, 9875698462
        </p>
      </div>
      <br />
      <p className="text-center copy">
        Copyright <span>© </span>2024 DhabaPoint . All rights reserved
      </p>
    </div>
  </div>
</>

    </div>
  )
}

export default Project
