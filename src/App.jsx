import { useEffect, useState } from "react";
import { Testimonial } from "./components/testimonial/Testimonial"
import data from "./assets/data/data.json"
import { Topnavigation } from "./components/tobnavigation/Topnavigation"
import Restart from "./components/restart/Restart"
import TestimonialsSlider from "./components/testimonialsslider/TestimonialsSlider";


function App() {  
  return (
    <>
    <Topnavigation/>
    <div className="my-20 flex">
    <TestimonialsSlider/>
      </div>
      <Restart/>
    </>
  )
}

export default App
