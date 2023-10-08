import React from 'react'
import { InnovaLayout, RootLayout } from 'shared'

const InnvoaPage = () => {
  return (
    <section className='min-h-screen max-w-xl p-4'>
      {/* page head */}
      <div className="flex mb-5">
        <h1 className="text-4xl font-semibold">Innova</h1>
      </div>
      {/* page head */}
{/* taps */}
    <div className="w-fit">
  <div className="rounded-lg border border-gray-300 bg-white py-1 px-1">
    <nav className="flex flex-wrap gap-2 bg-gray-100 font-semibold">
      <a  className="whitespace-nowrap inline-flex rounded-lg py-1 px-3 items-center  text-sm  text-gray-400  transition-all duration-200 hover:cursor-pointer ease-in-out  hover:text-gray-900"> Products </a>
      <a  className="whitespace-nowrap inline-flex rounded-lg py-1 px-3 items-center  text-sm  text-gray-400 transition-all duration-200 ease-in-out hover:cursor-pointer  hover:text-gray-900"> Users </a>
      <a  className="whitespace-nowrap inline-flex rounded-lg bg-1hite  items-center py-1 px-3 text-sm  text-black shadow-md font-semibold transition-all duration-200 hover:cursor-pointer ease-in-out"> Tasks </a>
      <a  className="whitespace-nowrap inline-flex rounded-lg py-1 px-3 items-center  text-sm  text-gray-400 transition-all duration-200 ease-in-out hover:cursor-pointer  hover:text-gray-900"> Sales </a>
      <a  className="whitespace-nowrap inline-flex rounded-lg py-1 px-3 items-center  text-sm  text-gray-400 transition-all duration-200 ease-in-out hover:cursor-pointer  hover:text-gray-900"> Ads </a>
    </nav>
  </div>
</div>
{/* taps */}


    </section>
  )
}
InnvoaPage.getLayout = (page) => {
    return (
      <RootLayout>
        <InnovaLayout>
          {page}
          </InnovaLayout>
        </RootLayout>
    )
}
export default InnvoaPage