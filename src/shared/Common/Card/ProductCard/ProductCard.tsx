import { RootState } from "core/store";
import { useSelector } from "react-redux";
import Link from "next/link";
const ProductCard = ({ id = null }) => {
  // const userSlice = useSelector((state: RootState) => state.user);
  return (
    <li>
      <div className="relative  flex w-full  flex-col overflow-hidden rounded-2xl border border-gray-100 ">
        {/* image */}
        <a className="relative mx-2 mt-2 flex h-60 overflow-hidden rounded-2xl">
          <img
            className="object-cover w-full"
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="product image"
          />
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
        {/* image */}
        {/* price and description */}
        <Link href={`/products/${id}`}>
          <div className="p-2.5">
            <div className=" flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">$449</span>
                <span className="text-sm text-zinc-400 line-through">$699</span>
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
            <a className="flex items-center justify-center rounded-2xl border border-zinc-100 text-zinc-900 px-5 py-2.5 text-center text-sm font-medium transition-all duration-300 hover:cursor-pointer hover:border-zinc-00 focus:outline-none focus:ring-4 focus:ring-blue-300">
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
        </Link>
        {/* price and description */}
      </div>
    </li>
  );
};

export default ProductCard;
