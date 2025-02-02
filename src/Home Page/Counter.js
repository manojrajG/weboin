import React, { useContext } from "react";
import DataContext from "../Context Api/DataContext";

function Counter() {
  const { counts } = useContext(DataContext);

  return (
    <section className="counterSection">
      <div className="counterConBox">
        <div className="counterContent">
          <div className="counterHeading">
            <div>
              <h1>
                <p className="counterHeadp1">
                  Empower your future with cutting-edge skills
                </p>
                <span className="counterHeadSpan">
                  New, Embrace innovation, master technology, & shape the
                  digital world
                </span>
                <p className="counterHeadp2">
                  Your journey to success starts here.
                </p>
              </h1>
            </div>
          </div>
          <div className="counterConSec">
            <p className="countersDesc">
              Join our course with a proven track record of success, where
              learning isn't just about gaining skills; it's about growing them.
              Join us, learn with confidence, and watch your skills soar.
            </p>
            <div className="countBox">
              <div className="count">
                <span className="countTitle">total students</span>
                <p className="nfc">{counts.totalStudents}</p>
              </div>
              <div className="count">
                <span className="countTitle">placed students</span>
                <p className="nfc">{counts.placedStudents}</p>
              </div>
              <div className="count">
                <span className="countTitle">unplaced students</span>
                <p className="nfc">{counts.unplacedStudents}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
