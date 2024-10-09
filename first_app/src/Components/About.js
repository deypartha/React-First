import React, { useState } from 'react'
function About() {
    const[myStyle, setMyState] = useState (
        {
            color: "#fff",
            backgroundColor: "#212121",
            border: "1px solid #fff",
        }
    )
    const [btnText, setBtnText] = useState("Enable Light Mode")
    const toggleBG = ()=>{
        if(myStyle.color=='#fff'){
            setMyState({
                color: "#212121",
                backgroundColor: "#fff",
                border: "1px solid #212121",
            })
            setBtnText("Enable Dark Mode")
        }
        else{
            setMyState({
                color: "#fff",
                backgroundColor: "#212121",
                border: "1px solid #fff",
            })
            setBtnText("Enable Light Mode")
        }
    }
    return (
        
      <div className='container' style={myStyle}>
                <h1>About Us</h1>
                <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"  style={myStyle} data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body"  style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"  style={myStyle} data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body"  style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
        </div>
        <div claclassNamess="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"  style={myStyle} data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body"  style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
        </div>
        </div>
        <div className='container p-3'>
            <button onClick={toggleBG} className='btn btn-primary'>{btnText}</button>
        </div>

      </div>
    )
  }
export default About;