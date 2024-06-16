import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import testimonialsData from "../data/testimonials.json";

const Testimonials = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slidesPerView: "1.25",
    mode: "free-snap",
    spacing: 15,
    breakpoints: {
      "(min-width: 768px)": {
        // md breakpoint
        slidesPerView: 1.5,
        mode: "free-snap",
        spacing: 20,
      },
    },
  });

  return (
    <div>
      <div ref={sliderRef} className="keen-slider flex justify-center">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="keen-slider__slide bg-gray-100 shadow p-6 rounded-lg"
          >
            <div className="flex items-center mb-4">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-dark">"{testimonial.review}"</p>
            <p className="mt-4 text-right text-secondary">
              - {testimonial.name}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <button
          aria-label="Previous slide"
          onClick={() => slider.current.prev()}
          className="rounded-full border border-primary p-4 text-primary transition hover:bg-primary hover:text-white"
        >
          <svg
            className="h-6 w-6 rtl:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          aria-label="Next slide"
          onClick={() => slider.current.next()}
          className="rounded-full border border-primary p-4 text-primary transition hover:bg-primary hover:text-white"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
