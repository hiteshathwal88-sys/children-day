import React from "react";

function About() {
  return (
    <div className="page about">
      <h2>About Children’s Day</h2>
      <p>
        Children’s Day is celebrated every year on November 14 in India to honor
        the birth anniversary of Pandit Jawaharlal Nehru. He believed that
        children are the real strength of a nation.
      </p>
      <img src={require("../images/WhatsApp Image 2025-11-10 at 11.53.17_6ca6b222.jpg")} alt="Happy children" className="hero-img" />
    </div>
  );
}

export default About;
