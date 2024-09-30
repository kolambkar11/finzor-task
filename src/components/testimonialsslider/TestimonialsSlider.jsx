import React, { useEffect, useState } from "react";
import Restart from "../restart/Restart";
import { Testimonial } from "../testimonial/Testimonial";
import data from "../../assets/data/data.json"
import "./Testimonialslider.css"


const TestimonialsSlider = () => {
    const [currentTestimonials, setCurrentTestimonials] = useState(data.slice(0, 3)); 
    
    const restartSlider = () => {
        setCurrentTestimonials(data.slice(0, 3)); 
    };

    // code for key press for R
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "r" || event.key === "R") {
                restartSlider();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className="testimonial-container">
            {currentTestimonials.map((testimonial, index) => (
                <Testimonial key={testimonial.id} data={testimonial} index={index} />
            ))}
                <Restart restartSlider={restartSlider} />
        </div>
    );
};


export default TestimonialsSlider;
