// Packages
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
// Hooks & Services
import { useThemeContext } from 'core/context/ThemeContext';

const ProductCard = ({ id }) => {
  const {
    theme: { mode },
  } = useThemeContext();
  return (
    <li>
      <div
        className={classNames(
          'relative  flex w-full bg-white/5  flex-col overflow-hidden rounded-2xl border',
          {
            ' text-dark-textSecondary border-dark-border': mode === 'dark',
            ' text-light-textSecondary border-light-border': mode === 'light',
          },
        )}
      >
        {/* image */}
        <Link href={`/products/${encodeURIComponent(id)}`}>
          <div className="relative mx-2 mt-2 flex h-60 overflow-hidden rounded-2xl">
            <Image
              className="object-cover w-full"
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="product image"
              width={10}
              height={10}
            />
            <span className="absolute top-0 left-0 m-2 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border shadow-sm ">
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
          </div>
        </Link>
        {/* image */}
        {/* price and description */}
        <div className="p-2.5">
          <Link href={`/products/${id}`}>
            <div>
              <div className=" flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold ">$449</span>
                  <span className="text-sm line-through">$699</span>
                </p>
                <div className="flex items-center">
                  {/* TODO:if the rating is under 2.5 then it's a red label instead of yellow */}
                  <span className="mr-2 ml-3 rounded-2xl bg-amber-200 px-2.5 py-0.5 text-xs font-semibold">
                    5.0
                  </span>
                </div>
              </div>
              <h5 className="text-xl tracking-tight">
                Nike Air MX Super 2500 - Red
              </h5>
            </div>
          </Link>
          <a className="flex border border-transparent items-center justify-center rounded-2xl  px-5 py-2.5 text-center text-sm font-medium transition-all duration-300 hover:cursor-pointer hover:bg-white/10 hover:border hover:border-white/50 focus:outline-none focus:ring-4 focus:ring-red-300">
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
  );
};

export default ProductCard;
