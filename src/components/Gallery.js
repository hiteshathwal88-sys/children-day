import React from "react";

function Gallery() {
  const images = [require("../images/WhatsApp Image 2025-11-10 at 11.53.20_5e45de07.jpg"), require("../images/WhatsApp Image 2025-11-10 at 11.53.20_a34ba07f.jpg"), require("../images/WhatsApp Image 2025-11-10 at 11.53.21_522dda59.jpg")];

  return (
    <div className="page gallery">
      <h2>Gallery</h2>
      <div className="gallery-container">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Children ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
