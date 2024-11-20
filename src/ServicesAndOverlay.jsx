import React from "react";


const ServicesAndHoverOverlay = ({ images }) => {
  const hoverItems = [
    { title: "Creative" },
    { title: "Design" },
    { title: "Animation" },
  ];

  return (
    <div className="services-container mt-6">
 
      <div className="services-intro">
        <h2 className="services-heading text-">Our Services</h2>
        <p className="services-para pt-20 font-['Helvetica']  text-2xl">
          We provide captivating design, interactive animations, advanced usability, reliable code, and immaculate project coordination. Whether you need a campaign built from scratch or assistance at a specific phase, we’ve got you covered.
        </p>
      </div>

     
      <div className="hover-section mt-[8vw] ">
        {hoverItems.map((item, index) => (
          <div key={index} className="hover-item">
            <h3 className="hover-title">{item.title}</h3>
            <div
              className="hover-image"
              style={{
                backgroundImage: `url(${images[index]})`,
              }}
            ></div>
            <div className="hover-content">
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesAndHoverOverlay;
