import React, { useState } from 'react';
import './About.css';
function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const team = [
    {
      name: "Partha Dey",
      role: "Developer",
      bio: "Developer is a full-stack developer with a passion for building web applications.",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSciz5-0QK0WC0L66fN3uO0fuQ7avF-Juegmw&s",
      linkedin: "https://www.linkedin.com/in/partha-dey-7b83b82a4/",
      twitter: "https://twitter.com/parthadey",
    },
    {
      name: "Paramveer Singh Mann",
      role: "Manager",
      bio: "Manager is a project manager with a focus on leading teams to success.",
      photo: "https://www.pngitem.com/pimgs/m/215-2157775_transparent-development-clipart-business-development-manager-icon-hd.png",
      linkedin: "https://www.linkedin.com/in/sourav-das-7b83b82a4/",
      twitter: "https://twitter.com/souravdas",
    },
    {
      name: "Shivam Kumar",
      role: "Designer",
      bio: "Designer is a UI/UX designer with a focus on creating beautiful and functional designs.",
      photo: "https://cdn-icons-png.flaticon.com/512/4539/4539261.png",
      linkedin: "https://www.linkedin.com/in/sourav-das-7b83b82a4/",
      twitter: "https://twitter.com/souravdas",
    },
    {
      name: "Tanveer Singh",
      role: "Marketing",
      bio: "Marketing is a marketing specialist with a focus on promoting products and services.",
      photo: "https://img.freepik.com/premium-vector/circular-marketing-icon_1453-93.jpg",
      linkedin: "https://www.linkedin.com/in/sourav-das-7b83b82a4/",
      twitter: "https://twitter.com/souravdas",
    },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className="container-fluid">
        <div className="">
          <div id="image_back">
            <img
              src="https://www.littlerustedladle.com/wp-content/uploads/2020/06/Midwest-Food-photographer-jena-carlin-and-food-stylist-Jim-Rude-Jena-Carlin-Creative_7-Web-2-1120x743.jpg"
              alt=""
              width="100%"
              height="500px"
            />
            <h1>About Us</h1>
          </div>
        </div>
        <div id="third">
          <div className="row">
            <h1>About</h1>
            <div id='col1' className="col-lg-6">
              <p>
                We want to create a world where anyone can build something meaningful with technology, and everyone has the learning tools, resources, and opportunities to do so. Code contains a world of possibilities — all that's required is the curiosity and drive to learn. At Developer Dude, we are committed to empowering all people, regardless of where they are in their coding journeys, to continue to learn, grow, and make an impact on the world around them.
                Developer Dude is a Professional Educational Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of Educational, with a focus on dependability, Courses and Projects . We're working to turn our passion for Educational into a booming online website. We hope you enjoy our Educational as much as we enjoy offering them to you.
                I will keep posting more important posts on my Website for all of you. Please give your support and love.
              </p>
            </div>
            <div id='col2' className="col-lg-6">
              <img
                src="https://t3.ftcdn.net/jpg/03/11/19/38/360_F_311193887_0aXFwwXXHu4PsBAVNW1USeypg1clOH8E.jpg"
                alt=""
                height="350px"
                width="100%"
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="choose_bg">
            <div className="container">
              <div id="about" className="white_bg">
                <div className="row">
                  {team.map((member, index) => (
                    <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                      <div id="boxx" className="for_box">
                        <img src={member.photo} alt={member.name} className="team-member-photo" />
                        <h1>{member.name}</h1>
                        <h3>{member.role}</h3>
                        <p>{member.bio}</p>
                      </div>
                    </div>
                  ))}
                  <div id="btn" className="col-md-12">
                    <button className="btn btn-outline-danger" onClick={openModal}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {isModalOpen && (
            <div className="modal" onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span id="close" onClick={closeModal}>&times;</span>
                <div id="modal-body">
                  {team.map((member, index) => (
                    <div key={index} className="team-member">
                      <img src={member.photo} alt={member.name} className="team-member-photo" />
                      <h3>{member.name} ({member.role})</h3>
                      <p>{member.bio}</p>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
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
        />
      </div>
      <div className="footer last">
        <div className="last_row">
          <div className="text-center element0">
            <img src="./image2/foodd.png" alt="" height="60px" width="70px" />
            <h1>DhabaPoint</h1>
          </div>
          <div className="text-center element1">
            <h3 className="und">Delivery Timing</h3>
            <p>
              08:00 AM - 11:00 PM <br /> Everyday
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
              01362595226, 6297571084
            </p>
          </div>
          <p className="text-center copy">
            Copyright <span>© </span>2024 DhabaPoint. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
