import Glide from "@glidejs/glide";
import { useEffect } from "react";

function InfiniteCarousel() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 10,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 3,
      classes: {
        nav: {
          active: "[&>*]:bg-zinc-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 1,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Testimonial carousel --> */}
      <div className="glide-09 relative overflow-hidden">
        {/* <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-1.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-2.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-3.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-4.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-5.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-6.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
          </ul>
        </div>
      </div>
      {/*<!-- End Testimonial carousel --> */}
    </>
  );
}
export default InfiniteCarousel;
