import React from "react";

function Home() {
  return (
    <div className="page home">
      <h2>Welcome to Children’s Day Celebration 🎉</h2>
      <p>
        Every child is a flower of the garden, unique and beautiful in their own way.
        Let’s celebrate the joy of childhood together!
      </p>
      
      <img src={require("../images/WhatsApp Image 2025-11-10 at 11.53.18_3abcae5c.jpg")} alt="Children playing" className="hero-img" />
      <footer> HITESH ATHWAL</footer>
    </div>
    
  );
}

export default Home;
