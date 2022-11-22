import './ImageSlider.css'
import {useState , useEffect} from "react";
import image1 from "../../images/img1.jpg";
import image2 from "../../images/img2.jpg";
import image3 from "../../images/img3.png";
import image4 from "../../images/img4.jpg";
// import image5 from "../../images/img5.jpg";

const ImageSlider = () => {

    const slides = [image1,image2,image3,image4];
    const [currentIndex,setCurrentIndex] = useState(0);
    const [currentImage,setCurrentImage] = useState(slides[0]);

    const goToPrevious = ()=>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    

    useEffect (() => {
        setCurrentImage(slides[currentIndex]);
    },[currentIndex])

    const newStyle ={
        background: `url(${currentImage}) no-repeat center center/ cover `
    }

    return (
        <div className="isContainer">
            <div>
                <div className="leftArrow"  onClick={goToPrevious}>
                ❰
                </div>
                <div className="rightArrow" onClick={goToNext}>
                ❱    
                </div>
            </div>
            <div className="images" style={newStyle}></div>
        </div>
    );
}
 
export default ImageSlider;