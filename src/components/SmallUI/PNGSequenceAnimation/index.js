import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Image } from "antd";
const PNGSequenceAnimation = () => {
  // Create a context for importing images (webpack-specific)
  const importImages = require.context(
    "../../assets/png/horseAnimation",
    false, // Use false to not include subdirectories
    /000\d\.png$/ // Regex pattern to match image file names, change as needed
  );
  // Get an array of image paths
  const imagePaths = importImages.keys();
  const images = imagePaths.map((imagePath) => importImages(imagePath));
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: ".animation-container",
      start: "top center",
      end: "bottom center",
      onUpdate: (self) => {
        setCurrentFrame(Math.round(self.progress * (images.length - 1)));
      },
    });
  }, [images.length]);

  return (
    <div className="animation-container">
      <Image src={images[currentFrame]} alt="Animation Frame" preview={false} />
      {/* Other components or elements */}
    </div>
  );
};

export default PNGSequenceAnimation;
