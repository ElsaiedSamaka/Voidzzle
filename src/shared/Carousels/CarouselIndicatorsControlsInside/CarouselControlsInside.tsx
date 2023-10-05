import Glide from "@glidejs/glide";
import { useEffect } from "react";

function CarouselControlsInside({ title }) {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 5,
      autoplay: 3000,
      animationDuration: 700,
      gap: 10,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1500: {
          perView: 4,
        },
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
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
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
            <li>
              <div className="relative  flex w-full max-w-xs flex-col overflow-hidden rounded-2xl border border-gray-100 ">
                <a className="relative mx-2 mt-2 flex h-60 overflow-hidden rounded-2xl">
                  <img
                    className="object-cover"
                    src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="product image"
                  />
                  {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    39% OFF
                    className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white"
                  </span> */}
                  <span className="absolute top-0 left-0 m-2 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm ">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                    </svg>
                  </span>
                </a>
                {/* price and description */}
                <div className="p-2.5">
                  <div className=" flex items-center justify-between">
                    <p>
                      <span className="text-3xl font-bold text-slate-900">
                        $449
                      </span>
                      <span className="text-sm text-zinc-400 line-through">
                        $699
                      </span>
                    </p>
                    <div className="flex items-center">
                      {/* TODO:if the rating is under 2.5 then it's a red label instead of yellow */}
                      <span className="mr-2 ml-3 rounded-2xl bg-amber-200 px-2.5 py-0.5 text-xs font-semibold">
                        5.0
                      </span>
                    </div>
                  </div>
                  <h5 className="text-xl tracking-tight text-zinc-900">
                    Nike Air MX Super 2500 - Red
                  </h5>
                  <a className="flex items-center justify-center rounded-2xl border border-zinc-50 text-zinc-900 px-5 py-2.5 text-center text-sm font-medium transition-all duration-300 hover:cursor-pointer hover:border-zinc-500 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add to cart
                  </a>
                </div>
                {/* price and description */}
              </div>
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
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
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
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
