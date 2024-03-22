// Packages
import Image from 'next/image';
import Glide from '@glidejs/glide';
// Hooks
import { useEffect } from 'react';

function InfiniteCarousel() {
  useEffect(() => {
    const slider = new Glide('.glide-09', {
      type: 'carousel',
      autoplay: 10,
      animationDuration: 3000,
      animationTimingFunc: 'linear',
      perView: 3,
      classes: {
        nav: {
          active: '[&>*]:bg-zinc-700',
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
              <Image
                alt="temp"
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-1.svg"
                width={10}
                height={10}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <Image
                alt="temp"
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-2.svg"
                width={10}
                height={10}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <Image
                alt="temp"
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-3.svg"
                width={10}
                height={10}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <Image
                alt="temp"
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-4.svg"
                width={10}
                height={10}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <Image
                alt="temp"
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-5.svg"
                width={10}
                height={10}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <Image
                alt="temp"
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-6.svg"
                width={10}
                height={10}
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
