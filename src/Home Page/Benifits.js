import React from "react";
import CertificateImg from "../Assets/logo/medal.png";
import ThoughtImg from "../Assets/logo/thought.png";
import TrainingImg from "../Assets/logo/training.png";
import AboutDashboard from "../Assets/img/AboutDashboard.png";

function Benifits() {
  const benifits = [
    {
      img: CertificateImg,
      title: "Certificate Distribution",
      desc: "We offer certificates to validate and recognize your achievement.",
    },
    {
      img: ThoughtImg,
      title: "Knowledge",
      desc: "We deliver transformative knowledge that empowers and inspires.",
    },
    {
      img: TrainingImg,
      title: "Hands-on Experience",
      desc: "We provide hands-on experience for real-world learning. You learn best by doing.",
    },
  ];
  return (
    <section className="sectionThree">
      <div className="benifitsSecConBox">
        <div className="benifitsHeader">
          <p>Open Source Theme and UI Components</p>
          <h1>Geaux Astro helps you craft beautiful websites efficiently</h1>
        </div>
        <div className="benifitsContent">
          <div className="benifitsDetails">
            {benifits.map((benifit, index) => {
              return (
                <div
                  className="benifits"
                  key={index}
                  style={{ marginTop: index > 0 && "3rem" }}
                >
                  <img src={benifit.img} alt="" />
                  <div>
                    <h3>{benifit.title}</h3>
                    <p>{benifit.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="benifitsDashboard">
            <img src={AboutDashboard} alt="dashboard" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benifits;
