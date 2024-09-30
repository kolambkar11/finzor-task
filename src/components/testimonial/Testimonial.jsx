import "./Testimonial.css";

export function Testimonial({ data, index }) {
    const { img, firstName, feedBack } = data;
    const isEven = index % 2 === 0; 

    return (
        <div className={`card-bg ${isEven ? 'even' : 'odd'} card-animate`}>
            <img src={img} alt="" className="testimonial-image mb-3" />
            <p className="mb-4">{firstName}</p>
            <p className="text-sm">{feedBack}</p>
        </div>
    );
}
