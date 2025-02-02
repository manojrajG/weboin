import React from "react";
import AirBnbImg from "../Assets/img/airbnb.png";
import GrabyoImg from "../Assets/logo/client-8.png";
import LifeGroupImg from "../Assets/logo/Lifegroups.png";
import MyobImg from "../Assets/logo/myob.png";
import TailusImg from "../Assets/img/tailus.png";
import MicrosoftImg from "../Assets/img/microsoft.png";
import CotyImg from "../Assets/img/coty.png";
import LillyImg from "../Assets/img/lilly.png";

function About() {
  const partnerLogo = [
    AirBnbImg,
    GrabyoImg,
    LifeGroupImg,
    MyobImg,
    TailusImg,
    MicrosoftImg,
    CotyImg,
    LillyImg,
  ];

  return (
    <section className="sectionTwo" >
      <div className="aboutConBox">
        <div className="aboutContent">
          <h1>Our Placement Partners</h1>
          <div className="aboutConPartnes">
            {partnerLogo.map((partner, index) => {
              return (
                <div
                  className="partner"
                  key={index}
                  style={{ padding: "1rem" }}
                >
                  <img
                    src={partner}
                    alt=""
                    srcset=""
                    style={{ width: "10rem", maxWidth: "100%" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <p>and, more companies</p>
      </div>
    </section>
  );
}

export default About;
