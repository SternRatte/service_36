import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import slide1 from "../asserts/slide1.png";
import slide2 from "../asserts/slide2.jpg";
import slide3 from "../asserts/slide3.jpg";

const images = [
    { url: slide1 },
    { url: slide2 },
    { url: slide3},
];
function Slider  ()  {
    return (
        <div className="slider">
            <SimpleImageSlider
                width={1700}
                height={950}
                images={images}
                showBullets={true}
                showNavs={true}
            />
        </div>
    )

}

export default Slider