import Link from "next/link";
import { useRouter } from "next/router";

const Signin = () => {
  const router = useRouter();
  return (
    <>
      <div className="p-10 w-screen h-screen absolute z-10">
        <div className="flex h-[99%] rounded-xl border flex-col md:flex-row md:pr-10 bg-white/90  ">
          <div className="max-w-md rounded-3xl bg-gradient-to-t from-red-500 via-red-700 to-red-600 px-4 py-10 text-white sm:px-10 md:m-6 md:mr-8">
            <p className="mb-20 font-bold tracking-wider">Voidzzle</p>
            <p className="mb-4 text-3xl font-bold md:text-4xl md:leading-snug">
              Start your <br />
              journey with us
            </p>
            <p className="mb-28 leading-relaxed text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              nisi voluptas a officia. Omnis.
            </p>
            <div className="bg-red-600/80 rounded-2xl px-4 py-8">
              <p className="mb-3 text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                ea voluptates sapiente!
              </p>
              <div className="">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="/images/y9s3xOJV6rnQPKIrdPYJy.png"
                    alt="Simon Lewis"
                  />
                  <p className="ml-4 w-56">
                    <strong className="block font-medium">Simon Lewis</strong>
                    <span className="text-xs text-gray-200">
                      {" "}
                      Published 12 Bestsellers{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-20 z-10 ">
            <h2 className="mb-2 text-3xl font-bold">Sign In</h2>
            <div className="mb-10 block font-bold text-gray-600">
              don't have an account ?{" "}
              <Link href="/auth/signup">
                <span className="hover:underline">Sign Up</span>
              </Link>
            </div>
            <p className="mb-1 font-medium text-gray-500">Looking for?</p>
            <div className="mb-6 flex flex-col gap-y-2 gap-x-4 lg:flex-row">
              <div className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
                <input
                  className="peer hidden"
                  type="radio"
                  name="radio"
                  id="radio1"
                  defaultChecked
                />
                <label
                  className="peer-checked:border-red-600 peer-checked:bg-red-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border"
                  htmlFor="radio1"
                >
                  {" "}
                </label>
                <div className="peer-checked:border-transparent peer-checked:bg-red-600 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-red-600 ring-offset-2" />
                <span className="pointer-events-none z-10">Projects</span>
              </div>
              <div className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
                <input
                  className="peer hidden"
                  type="radio"
                  name="radio"
                  id="radio3"
                  defaultChecked
                />
                <label
                  className="peer-checked:border-red-600 peer-checked:bg-red-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border"
                  htmlFor="radio3"
                >
                  {" "}
                </label>
                <div className="peer-checked:border-transparent peer-checked:bg-red-600 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-red-600 ring-offset-2" />
                <span className="pointer-events-none z-10">Job</span>
              </div>
            </div>
            <p className="mb-1 font-medium text-gray-500">Email</p>
            <div className="mb-4 flex flex-col">
              <div className="focus-within:border-red-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                <input
                  type="email"
                  id="signup-email"
                  className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <p className="mb-1 font-medium text-gray-500">Password</p>
            <div className="mb-4 flex flex-col">
              <div className="focus-within:border-red-600 relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                <input
                  type="password"
                  id="signup-password"
                  className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Choose a password (minimum 8 characters)"
                />
              </div>
            </div>
            <button
              className="hover:shadow-red-600/40 rounded-xl bg-gradient-to-r from-red-700 to-red-600 px-8 py-3 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg"
              onClick={() => {
                router.push("/");
                console.log("signin");
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      <svg
        className="w-full h-full absolute"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={1440}
        height={560}
        preserveAspectRatio="none"
        viewBox="0 0 1440 560"
      >
        <g mask='url("#SvgjsMask1076")' fill="none">
          <path
            d="M-64.96 355.45L-64.96 355.45"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M-64.96 355.45L54.68 396.27"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M-64.96 355.45L-71.57 547.35"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M-64.96 355.45L93.1 560.71"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M-64.96 355.45L234.05 395.18"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M-64.96 355.45L201.2 508.56"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M-71.57 547.35L-71.57 547.35"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M-71.57 547.35L93.1 560.71"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M-71.57 547.35L97.17 644.95"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M54.68 396.27L54.68 396.27"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M54.68 396.27L93.1 560.71"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M54.68 396.27L234.05 395.18"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M93.1 560.71L93.1 560.71"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M93.1 560.71L97.17 644.95"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M93.1 560.71L201.2 508.56"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M97.17 644.95L97.17 644.95"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M97.17 644.95L244.51 673.82"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M97.17 644.95L201.2 508.56"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M97.17 644.95L54.68 396.27"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M234.05 395.18L234.05 395.18"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M234.05 395.18L201.2 508.56"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M234.05 395.18L383.49 386.65"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M234.05 395.18L93.1 560.71"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M234.05 395.18L406.95 547.42"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M201.2 508.56L201.2 508.56"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M201.2 508.56L244.51 673.82"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M201.2 508.56L54.68 396.27"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M244.51 673.82L244.51 673.82"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M244.51 673.82L405.01 708.55"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M244.51 673.82L93.1 560.71"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M383.49 386.65L383.49 386.65"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M383.49 386.65L490.91 390.34"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M383.49 386.65L406.95 547.42"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M383.49 386.65L201.2 508.56"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M383.49 386.65L687.2 362.48"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M406.95 547.42L406.95 547.42"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M406.95 547.42L405.01 708.55"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M405.01 708.55L405.01 708.55"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M405.01 708.55L533.72 699.52"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M405.01 708.55L654.74 686.13"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M405.01 708.55L201.2 508.56"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M490.91 390.34L490.91 390.34"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M490.91 390.34L406.95 547.42"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M490.91 390.34L687.2 362.48"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M490.91 390.34L689.67 518.35"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M533.72 699.52L533.72 699.52"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M533.72 699.52L654.74 686.13"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M533.72 699.52L406.95 547.42"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M533.72 699.52L689.67 518.35"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M533.72 699.52L244.51 673.82"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M695.08 229.82L695.08 229.82"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M695.08 229.82L687.2 362.48"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M695.08 229.82L846.41 251.66"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M695.08 229.82L806.27 398.91"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M695.08 229.82L948.19 201"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M695.08 229.82L490.91 390.34"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M687.2 362.48L687.2 362.48"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M687.2 362.48L806.27 398.91"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M687.2 362.48L689.67 518.35"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M687.2 362.48L846.41 251.66"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M689.67 518.35L689.67 518.35"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M689.67 518.35L806.27 398.91"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M689.67 518.35L654.74 686.13"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M689.67 518.35L861.53 561.43"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M689.67 518.35L827.47 669.47"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M654.74 686.13L654.74 686.13"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M654.74 686.13L827.47 669.47"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M654.74 686.13L861.53 561.43"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M846.41 251.66L846.41 251.66"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M846.41 251.66L948.19 201"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M846.41 251.66L806.27 398.91"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M806.27 398.91L806.27 398.91"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M861.53 561.43L861.53 561.43"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M861.53 561.43L968.67 558.29"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M861.53 561.43L827.47 669.47"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M861.53 561.43L972.6 643.36"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M861.53 561.43L806.27 398.91"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M861.53 561.43L975.56 367.11"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M827.47 669.47L827.47 669.47"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M827.47 669.47L972.6 643.36"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M827.47 669.47L968.67 558.29"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M959.77 -43.12L959.77 -43.12"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M959.77 -43.12L982.12 42.35"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M959.77 -43.12L1090.74 38.31"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M959.77 -43.12L1105.07 -95.46"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M959.77 -43.12L948.19 201"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M959.77 -43.12L846.41 251.66"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M982.12 42.35L982.12 42.35"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M982.12 42.35L1090.74 38.31"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M982.12 42.35L948.19 201"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M982.12 42.35L1105.07 -95.46"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M982.12 42.35L1098.9 250.95"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M982.12 42.35L846.41 251.66"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M948.19 201L948.19 201"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M948.19 201L1098.9 250.95"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M948.19 201L975.56 367.11"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M975.56 367.11L975.56 367.11"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M975.56 367.11L1113.19 381.68"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M975.56 367.11L1098.9 250.95"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M975.56 367.11L806.27 398.91"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M975.56 367.11L846.41 251.66"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M968.67 558.29L968.67 558.29"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M968.67 558.29L972.6 643.36"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M972.6 643.36L972.6 643.36"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M972.6 643.36L1130.96 689.58"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M972.6 643.36L1148.69 525.31"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M972.6 643.36L975.56 367.11"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1105.07 -95.46L1105.07 -95.46"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1105.07 -95.46L1090.74 38.31"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1090.74 38.31L1090.74 38.31"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1090.74 38.31L1298.24 70.35"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1098.9 250.95L1098.9 250.95"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1098.9 250.95L1113.19 381.68"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1098.9 250.95L1280.48 195.72"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1098.9 250.95L1254.04 374.72"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1113.19 381.68L1113.19 381.68"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1113.19 381.68L1254.04 374.72"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1148.69 525.31L1148.69 525.31"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1148.69 525.31L1113.19 381.68"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1148.69 525.31L1311.36 536.39"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1148.69 525.31L1130.96 689.58"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1148.69 525.31L968.67 558.29"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1148.69 525.31L1254.04 374.72"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1130.96 689.58L1130.96 689.58"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1130.96 689.58L1248.37 684.56"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1130.96 689.58L968.67 558.29"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1130.96 689.58L1311.36 536.39"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1130.96 689.58L861.53 561.43"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1298.24 70.35L1298.24 70.35"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1298.24 70.35L1414.81 93.38"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1298.24 70.35L1280.48 195.72"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1298.24 70.35L1406.5 -86.76"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1298.24 70.35L1437.15 204.62"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1280.48 195.72L1280.48 195.72"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1280.48 195.72L1437.15 204.62"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1280.48 195.72L1414.81 93.38"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1280.48 195.72L1254.04 374.72"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1280.48 195.72L1388.33 412.08"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1254.04 374.72L1254.04 374.72"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1254.04 374.72L1388.33 412.08"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1254.04 374.72L1311.36 536.39"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1311.36 536.39L1311.36 536.39"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1311.36 536.39L1396.9 536.97"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1311.36 536.39L1388.33 412.08"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1311.36 536.39L1248.37 684.56"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1248.37 684.56L1248.37 684.56"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1248.37 684.56L1432.61 687.76"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1406.5 -86.76L1406.5 -86.76"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1406.5 -86.76L1414.81 93.38"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1406.5 -86.76L1545.52 60.4"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1406.5 -86.76L1437.15 204.62"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1406.5 -86.76L1105.07 -95.46"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1414.81 93.38L1414.81 93.38"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1414.81 93.38L1437.15 204.62"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1437.15 204.62L1437.15 204.62"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1437.15 204.62L1550.08 223.16"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1388.33 412.08L1388.33 412.08"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1388.33 412.08L1396.9 536.97"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1388.33 412.08L1562.7 338.42"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1388.33 412.08L1437.15 204.62"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1388.33 412.08L1583.05 518.01"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1396.9 536.97L1396.9 536.97"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1396.9 536.97L1432.61 687.76"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1432.61 687.76L1432.61 687.76"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1432.61 687.76L1580.46 701.1"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1432.61 687.76L1311.36 536.39"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1432.61 687.76L1583.05 518.01"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1545.52 60.4L1545.52 60.4"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1545.52 60.4L1414.81 93.38"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1545.52 60.4L1550.08 223.16"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1545.52 60.4L1437.15 204.62"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1550.08 223.16L1550.08 223.16"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1550.08 223.16L1562.7 338.42"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1562.7 338.42L1562.7 338.42"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1562.7 338.42L1583.05 518.01"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1562.7 338.42L1437.15 204.62"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1562.7 338.42L1396.9 536.97"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1562.7 338.42L1545.52 60.4"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1583.05 518.01L1583.05 518.01"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1580.46 701.1L1580.46 701.1"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1580.46 701.1L1583.05 518.01"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1580.46 701.1L1396.9 536.97"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1580.46 701.1L1311.36 536.39"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <path
            d="M1580.46 701.1L1248.37 684.56"
            stroke="rgba(185, 185, 185, 1)"
            strokeWidth="1.5"
          />
          <circle r={5} cx="-64.96" cy="355.45" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="-71.57" cy="547.35" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="54.68" cy="396.27" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="93.1" cy="560.71" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="97.17" cy="644.95" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="234.05" cy="395.18" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="201.2" cy="508.56" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="244.51" cy="673.82" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="383.49" cy="386.65" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="406.95" cy="547.42" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="405.01" cy="708.55" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="490.91" cy="390.34" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="533.72" cy="699.52" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="695.08" cy="229.82" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="687.2" cy="362.48" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="689.67" cy="518.35" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="654.74" cy="686.13" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="846.41" cy="251.66" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="806.27" cy="398.91" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="861.53" cy="561.43" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="827.47" cy="669.47" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="959.77" cy="-43.12" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="982.12" cy="42.35" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="948.19" cy={201} fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="975.56" cy="367.11" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="968.67" cy="558.29" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="972.6" cy="643.36" fill="rgba(185, 185, 185, 1)" />
          <circle
            r={5}
            cx="1105.07"
            cy="-95.46"
            fill="rgba(185, 185, 185, 1)"
          />
          <circle r={5} cx="1090.74" cy="38.31" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="1098.9" cy="250.95" fill="rgba(185, 185, 185, 1)" />
          <circle
            r={5}
            cx="1113.19"
            cy="381.68"
            fill="rgba(185, 185, 185, 1)"
          />
          <circle
            r={5}
            cx="1148.69"
            cy="525.31"
            fill="rgba(185, 185, 185, 1)"
          />
          <circle
            r={5}
            cx="1130.96"
            cy="689.58"
            fill="rgba(185, 185, 185, 1)"
          />
          <circle r={5} cx="1298.24" cy="70.35" fill="rgba(185, 185, 185, 1)" />
          <circle
            r={5}
            cx="1280.48"
            cy="195.72"
            fill="rgba(185, 185, 185, 1)"
          />
          <circle
            r={5}
            cx="1254.04"
            cy="374.72"
            fill="rgba(185, 185, 185, 1)"
          />
          <circle
            r={5}
            cx="1311.36"
            cy="536.39"
            fill="rgba(185, 185, 185, 1)"
          />
          <circle
            r={5}
            cx="1248.37"
            cy="684.56"
            fill="rgba(185, 185, 185, 1)"
          />
          <circle r={5} cx="1406.5" cy="-86.76" fill="rgba(185, 185, 185, 1)" />
          <circle r={5} cx="1414.81" cy="93.38" fill="rgba(185, 185, 185, 1)" />
          <circle
            r={5}
            cx="1437.15"
            cy="204.62"
            fill="rgba(185, 185, 185, 1)"
          />
          <circle
            r={5}
            cx="1388.33"
            cy="412.08"
            fill="rgba(185, 185, 185, 1)"
          />
          <circle r={5} cx="1396.9" cy="536.97" fill="rgba(185, 185, 185, 1)" />
          <circle
            r={5}
            cx="1432.61"
            cy="687.76"
            fill="rgba(185, 185, 185, 1)"
          />
          <circle r={5} cx="1545.52" cy="60.4" fill="rgba(185, 185, 185, 1)" />
          <circle
            r={5}
            cx="1550.08"
            cy="223.16"
            fill="rgba(185, 185, 185, 1)"
          />
          <circle r={5} cx="1562.7" cy="338.42" fill="rgba(185, 185, 185, 1)" />
          <circle
            r={5}
            cx="1583.05"
            cy="518.01"
            fill="rgba(185, 185, 185, 1)"
          />
          <circle r={5} cx="1580.46" cy="701.1" fill="rgba(185, 185, 185, 1)" />
          <path
            d="M356.32 665.65L356.32 665.65"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M356.32 665.65L217.27 711.17"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M658.9 490.38L658.9 490.38"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M658.9 490.38L546.84 412.15"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M658.9 490.38L500.69 532.25"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M682.1 705.12L682.1 705.12"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M682.1 705.12L542.46 643.89"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M682.1 705.12L835.63 638.89"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M682.1 705.12L658.9 490.38"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1159.99 221.02L1159.99 221.02"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1159.99 221.02L1291.38 205.83"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1159.99 221.02L1271.33 89.96"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1114.23 647.08L1114.23 647.08"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1114.23 647.08L990.89 640.43"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1114.23 647.08L1242.09 545.75"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1114.23 647.08L1272.92 691.73"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1114.23 647.08L1122.19 409.25"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1114.23 647.08L835.63 638.89"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1271.33 89.96L1271.33 89.96"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1271.33 89.96L1291.38 205.83"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1271.33 89.96L1304.55 -51.31"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1271.33 89.96L1422.32 97.18"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1271.33 89.96L1161.8 -72.3"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1271.33 89.96L1415.32 223.47"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1242.09 545.75L1242.09 545.75"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1242.09 545.75L1272.92 691.73"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1242.09 545.75L1298.55 403.9"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1563.26 544.23L1563.26 544.23"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1563.26 544.23L1547.87 695.23"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1563.26 544.23L1410.53 543.17"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1563.26 544.23L1540.24 352.9"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1563.26 544.23L1423.29 702.39"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1563.26 544.23L1388.66 382.15"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1563.26 544.23L1298.55 403.9"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M-37.95 536.49L-37.95 536.49"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M-37.95 536.49L94.97 528.11"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M-37.95 536.49L-87.7 693.38"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M-37.95 536.49L98.67 652.08"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M-37.95 536.49L214.87 488.64"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M-37.95 536.49L217.27 711.17"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M-87.7 693.38L-87.7 693.38"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M-87.7 693.38L98.67 652.08"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M-87.7 693.38L94.97 528.11"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M-87.7 693.38L217.27 711.17"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M-87.7 693.38L214.87 488.64"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M-87.7 693.38L356.32 665.65"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M94.97 528.11L94.97 528.11"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M94.97 528.11L98.67 652.08"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M94.97 528.11L214.87 488.64"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M98.67 652.08L98.67 652.08"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M98.67 652.08L217.27 711.17"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M98.67 652.08L214.87 488.64"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M214.87 488.64L214.87 488.64"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M214.87 488.64L395.81 519.55"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M214.87 488.64L217.27 711.17"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M214.87 488.64L356.32 665.65"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M217.27 711.17L217.27 711.17"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M217.27 711.17L94.97 528.11"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M217.27 711.17L395.81 519.55"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M395.81 519.55L395.81 519.55"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M395.81 519.55L500.69 532.25"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M395.81 519.55L356.32 665.65"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M546.84 412.15L546.84 412.15"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M546.84 412.15L500.69 532.25"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M546.84 412.15L395.81 519.55"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M546.84 412.15L542.46 643.89"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M500.69 532.25L500.69 532.25"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M500.69 532.25L542.46 643.89"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M542.46 643.89L542.46 643.89"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M542.46 643.89L356.32 665.65"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M827.39 393.52L827.39 393.52"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M827.39 393.52L843.03 545.83"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M827.39 393.52L970.01 337.65"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M843.03 545.83L843.03 545.83"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M843.03 545.83L835.63 638.89"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M835.63 638.89L835.63 638.89"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M835.63 638.89L990.89 640.43"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M970.01 337.65L970.01 337.65"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M970.01 337.65L1122.19 409.25"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M990.89 640.43L990.89 640.43"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M990.89 640.43L843.03 545.83"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M990.89 640.43L1122.19 409.25"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1161.8 -72.3L1161.8 -72.3"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1161.8 -72.3L1304.55 -51.31"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1161.8 -72.3L1427.41 -99.04"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1161.8 -72.3L1159.99 221.02"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1161.8 -72.3L1291.38 205.83"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1122.19 409.25L1122.19 409.25"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1122.19 409.25L1298.55 403.9"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1122.19 409.25L1242.09 545.75"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1122.19 409.25L1159.99 221.02"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1122.19 409.25L1291.38 205.83"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1304.55 -51.31L1304.55 -51.31"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1304.55 -51.31L1427.41 -99.04"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1291.38 205.83L1291.38 205.83"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1291.38 205.83L1415.32 223.47"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1291.38 205.83L1422.32 97.18"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1291.38 205.83L1298.55 403.9"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1298.55 403.9L1298.55 403.9"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1298.55 403.9L1388.66 382.15"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1298.55 403.9L1410.53 543.17"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1298.55 403.9L1415.32 223.47"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1272.92 691.73L1272.92 691.73"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1272.92 691.73L1423.29 702.39"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1272.92 691.73L1410.53 543.17"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1427.41 -99.04L1427.41 -99.04"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1427.41 -99.04L1571.44 -71.84"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1427.41 -99.04L1422.32 97.18"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1422.32 97.18L1422.32 97.18"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1422.32 97.18L1415.32 223.47"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1422.32 97.18L1600.53 39.89"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1415.32 223.47L1415.32 223.47"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1388.66 382.15L1388.66 382.15"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1388.66 382.15L1540.24 352.9"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1388.66 382.15L1415.32 223.47"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1388.66 382.15L1410.53 543.17"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1388.66 382.15L1291.38 205.83"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1410.53 543.17L1410.53 543.17"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1410.53 543.17L1423.29 702.39"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1410.53 543.17L1242.09 545.75"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1423.29 702.39L1423.29 702.39"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1423.29 702.39L1547.87 695.23"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1571.44 -71.84L1571.44 -71.84"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1571.44 -71.84L1600.53 39.89"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1571.44 -71.84L1422.32 97.18"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1571.44 -71.84L1304.55 -51.31"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1600.53 39.89L1600.53 39.89"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1600.53 39.89L1427.41 -99.04"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1540.24 352.9L1540.24 352.9"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1540.24 352.9L1415.32 223.47"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1540.24 352.9L1410.53 543.17"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1540.24 352.9L1298.55 403.9"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1540.24 352.9L1422.32 97.18"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1547.87 695.23L1547.87 695.23"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1547.87 695.23L1410.53 543.17"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1547.87 695.23L1272.92 691.73"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1547.87 695.23L1242.09 545.75"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <path
            d="M1547.87 695.23L1540.24 352.9"
            stroke="hsl(0, 100%, 65%)"
            strokeWidth="1.5"
          />
          <circle
            r={25}
            cx="356.32"
            cy="665.65"
            fill='url("#SvgjsRadialGradient1077")'
          />
          <circle
            r={25}
            cx="658.9"
            cy="490.38"
            fill='url("#SvgjsRadialGradient1077")'
          />
          <circle
            r={25}
            cx="682.1"
            cy="705.12"
            fill='url("#SvgjsRadialGradient1077")'
          />
          <circle
            r={25}
            cx="1159.99"
            cy="221.02"
            fill='url("#SvgjsRadialGradient1077")'
          />
          <circle
            r={25}
            cx="1114.23"
            cy="647.08"
            fill='url("#SvgjsRadialGradient1077")'
          />
          <circle
            r={25}
            cx="1271.33"
            cy="89.96"
            fill='url("#SvgjsRadialGradient1077")'
          />
          <circle
            r={25}
            cx="1242.09"
            cy="545.75"
            fill='url("#SvgjsRadialGradient1077")'
          />
          <circle
            r={25}
            cx="1563.26"
            cy="544.23"
            fill='url("#SvgjsRadialGradient1077")'
          />
          <circle r={5} cx="-37.95" cy="536.49" fill="#ff8080" />
          <circle r={5} cx="-87.7" cy="693.38" fill="#ff8080" />
          <circle r={5} cx="94.97" cy="528.11" fill="#ff8080" />
          <circle r={5} cx="98.67" cy="652.08" fill="#ff8080" />
          <circle r={5} cx="214.87" cy="488.64" fill="#ff8080" />
          <circle r={5} cx="217.27" cy="711.17" fill="#ff8080" />
          <circle r={5} cx="395.81" cy="519.55" fill="#ff8080" />
          <circle r={5} cx="546.84" cy="412.15" fill="#ff8080" />
          <circle r={5} cx="500.69" cy="532.25" fill="#ff8080" />
          <circle r={5} cx="542.46" cy="643.89" fill="#ff8080" />
          <circle r={5} cx="827.39" cy="393.52" fill="#ff8080" />
          <circle r={5} cx="843.03" cy="545.83" fill="#ff8080" />
          <circle r={5} cx="835.63" cy="638.89" fill="#ff8080" />
          <circle r={5} cx="970.01" cy="337.65" fill="#ff8080" />
          <circle r={5} cx="990.89" cy="640.43" fill="#ff8080" />
          <circle r={5} cx="1161.8" cy="-72.3" fill="#ff8080" />
          <circle r={5} cx="1122.19" cy="409.25" fill="#ff8080" />
          <circle r={5} cx="1304.55" cy="-51.31" fill="#ff8080" />
          <circle r={5} cx="1291.38" cy="205.83" fill="#ff8080" />
          <circle r={5} cx="1298.55" cy="403.9" fill="#ff8080" />
          <circle r={5} cx="1272.92" cy="691.73" fill="#ff8080" />
          <circle r={5} cx="1427.41" cy="-99.04" fill="#ff8080" />
          <circle r={5} cx="1422.32" cy="97.18" fill="#ff8080" />
          <circle r={5} cx="1415.32" cy="223.47" fill="#ff8080" />
          <circle r={5} cx="1388.66" cy="382.15" fill="#ff8080" />
          <circle r={5} cx="1410.53" cy="543.17" fill="#ff8080" />
          <circle r={5} cx="1423.29" cy="702.39" fill="#ff8080" />
          <circle r={5} cx="1571.44" cy="-71.84" fill="#ff8080" />
          <circle r={5} cx="1600.53" cy="39.89" fill="#ff8080" />
          <circle r={5} cx="1540.24" cy="352.9" fill="#ff8080" />
          <circle r={5} cx="1547.87" cy="695.23" fill="#ff8080" />
        </g>
        <defs>
          <mask id="SvgjsMask1076">
            <rect width={1440} height={560} fill="#ffffff" />
          </mask>
          <radialGradient id="SvgjsRadialGradient1077">
            <stop stopColor="#ffffff" offset="0.1" />
            <stop stopColor="rgba(255, 0, 0, 1)" offset="0.2" />
            <stop stopColor="rgba(255, 0, 0, 0)" offset={1} />
          </radialGradient>
        </defs>
      </svg>
    </>
  );
}

export default Signin


