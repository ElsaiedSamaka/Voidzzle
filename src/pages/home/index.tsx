import { useState } from 'react';
import { useTranslation } from 'core/context/TranslationContext';

import {
  CarouselControlsInside,
  Footer,
  Hero,
  HomeLayout,
  InfiniteCarousel,
  RootLayout,
} from 'shared';
import { Chat } from 'views';
import classnames from 'classnames';
const Home = () => {
  const [showSellOptions, toggleSellOptions] = useState(false);
  const { t } = useTranslation();
  return (
    <section id="home-container" className="w-full h-[89vh] overflow-hidden">
      <div className="grid grid-cols-4 gap-4 h-full my-2">
        <div className="lg:col-span-3 rounded-lg h-screen overflow-y-scroll xs:col-span-full">
          {/* <CarouselTestimonial /> */}
          <div className="">
            {/* hero card */}
            <Hero />
            {/* hero card */}
          </div>
          <div className="my-3">
            {/* controls */}
            <CarouselControlsInside title="home.deals_of_day" />
            {/* controls */}
          </div>
          <div className="flex items-center justify-between my-3">
            <span className="font-bold text-2xl">{t('home.trusted_by')}</span>
            <div className=" max-w-[90%] border border-gray-100/10 rounded-full shadow-inner relative">
              {/* infinite carousel */}
              <InfiniteCarousel />
              {/* infinite carousel */}
            </div>
          </div>
          <div className="my-3">
            {/* controls */}
            <CarouselControlsInside title="home.villas" />
            {/* controls */}
          </div>
          <div className="my-3">
            {/* controls */}
            <CarouselControlsInside title="home.mobile_&_taplets" />
            {/* controls */}
          </div>
          <div className="my-3">
            {/* controls */}
            <CarouselControlsInside title="home.laps_&_pc" />
            {/* controls */}
          </div>
          <div className="my-3">
            {/* controls */}
            <CarouselControlsInside title="home.vehicles" />
            {/* controls */}
          </div>
          <div className="my-3">
            {/* controls */}
            <CarouselControlsInside title="home.pets" />
            {/* controls */}
          </div>
          <div className="my-3">
            {/* controls */}
            <CarouselControlsInside title="home.fashion_&_clothes" />
            {/* controls */}
          </div>
          <div className="my-3">
            {/* controls */}
            <CarouselControlsInside title="home.footwear" />
            {/* controls */}
          </div>
          <div className="my-3">
            {/* controls */}
            <CarouselControlsInside title="home.footwear" />
            {/* controls */}
          </div>
          <div className="my-3">
            {/* controls */}
            <CarouselControlsInside title="home.furniture" />
            {/* controls */}
          </div>
          <div className="my-3">
            {/* controls */}
            <CarouselControlsInside title="home.other_stuff" />
            {/* controls */}
          </div>
          {/* sell */}
          <div>
            <div className="fixed bottom-10 right-10 group">
              <div
                id="speed-dial-menu-text-outside-button-square"
                className={classnames(
                  'flex flex-col items-center  mb-4 space-y-2 transition-all duration-300',
                  { hidden: !showSellOptions },
                )}
              >
                <button
                  title="temp"
                  type="button"
                  className="relative w-[52px] h-[52px] text-gray-500 bg-white rounded-full border border-gray-200 hover:text-gray-900 :border-gray-600 shadow-sm :hover:text-white :text-gray-400 hover:bg-gray-50 :bg-gray-700 :hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none :focus:ring-gray-400"
                >
                  <svg
                    className="w-5 h-5 mx-auto"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M14.419 10.581a3.564 3.564 0 0 0-2.574 1.1l-4.756-2.49a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.428L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.58 3.58 0 1 0 3.508-2.871Z" />
                  </svg>
                </button>
                <button
                  title="temp"
                  type="button"
                  className="relative w-[52px] h-[52px] text-gray-500 bg-white rounded-full border border-gray-200 :border-gray-600 hover:text-gray-900 shadow-sm :hover:text-white :text-gray-400 hover:bg-gray-50 :bg-gray-700 :hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none :focus:ring-gray-400"
                >
                  <svg
                    className="w-5 h-5 mx-auto"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 20h10a1 1 0 0 0 1-1v-5H4v5a1 1 0 0 0 1 1Z" />
                    <path d="M18 7H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-1-2V2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3h14Z" />
                  </svg>
                </button>
                <button
                  title="test"
                  type="button"
                  className="relative w-[52px] h-[52px] text-gray-500 bg-white rounded-full border border-gray-200 :border-gray-600 hover:text-gray-900 shadow-sm :hover:text-white :text-gray-400 hover:bg-gray-50 :bg-gray-700 :hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none :focus:ring-gray-400"
                >
                  <svg
                    className="w-5 h-5 mx-auto"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                  </svg>
                </button>
                <button
                  title="temp"
                  type="button"
                  className="relative w-[52px] h-[52px] text-gray-500 bg-white rounded-full border border-gray-200 :border-gray-600 hover:text-gray-900 shadow-sm :hover:text-white :text-gray-400 hover:bg-gray-50 :bg-gray-700 :hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none :focus:ring-gray-400"
                >
                  <svg
                    className="w-5 h-5 mx-auto"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M5 9V4.13a2.96 2.96 0 0 0-1.293.749L.879 7.707A2.96 2.96 0 0 0 .13 9H5Zm11.066-9H9.829a2.98 2.98 0 0 0-2.122.879L7 1.584A.987.987 0 0 0 6.766 2h4.3A3.972 3.972 0 0 1 15 6v10h1.066A1.97 1.97 0 0 0 18 14V2a1.97 1.97 0 0 0-1.934-2Z" />
                    <path d="M11.066 4H7v5a2 2 0 0 1-2 2H0v7a1.969 1.969 0 0 0 1.933 2h9.133A1.97 1.97 0 0 0 13 18V6a1.97 1.97 0 0 0-1.934-2Z" />
                  </svg>
                </button>
              </div>
              <button
                onMouseEnter={() => {
                  toggleSellOptions(true);
                }}
                onMouseLeave={() => {
                  toggleSellOptions(false);
                }}
                type="button"
                data-dial-toggle="speed-dial-menu-text-outside-button-square"
                aria-controls="speed-dial-menu-text-outside-button-square"
                aria-expanded="false"
                className="flex items-center justify-center text-white bg-red-700 rounded-full w-14 h-14 hover:bg-red-800  focus:ring-4 focus:ring-red-300 focus:outline-none shadow-md"
              >
                <svg
                  className="w-6 h-6 group-hover:animate-bounce"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"
                  />
                </svg>
                <span className="sr-only">Open actions menu</span>
              </button>
            </div>
          </div>
        </div>
        <div className="chat-container rounded-2xl w-full xs:hidden lg:inline-block border border-gray-100/10">
          <Chat />
        </div>
      </div>
      {/* footer */}
      <Footer />
      {/* footer */}
    </section>
  );
};
// eslint-disable-next-line
Home.getLayout = (page) => {
  return (
    <RootLayout>
      <HomeLayout>{page}</HomeLayout>
    </RootLayout>
  );
};

export default Home;
