import Glide from "@glidejs/glide";
import { useEffect } from "react";
import { Card } from "shared";

function CarouselControlsInside({ title }) {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 4,
      autoplay: 9000,
      animationDuration: 900,
      gap: 10,
      classNames: {
        nav: {
          active: "[&>*]:bg-zinc-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 3,
        },
        640: {
          perView: 2,
        },
        500: {
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
      <div className="flex justify-between items-center my-2 font-semibold">
        <span className="font-bold text-2xl">{title}</span>
        <span className="group inline-flex items-center font-semibold text-zinc-400 hover:cursor-pointer hover:text-zinc-900 hover:underline">
          See All
          <svg
            className="w-5 h-5 group-hover:translate-x-3 group-hover:animate-ping duration:300"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            ></path>
          </svg>
        </span>
      </div>
      {/*<!-- Component: Carousel with controls inside --> */}
      <div className="glide-01 relative w-full my-2">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
             <Card id={1} />
             <Card id={2} />
             <Card id={3} />
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 bg-white/20 text-zinc-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 bg-white/20 text-zinc-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      {/*<!-- End Carousel with controls inside --> */}
    </>
  );
}

export default CarouselControlsInside;
