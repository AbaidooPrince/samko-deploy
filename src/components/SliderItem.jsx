/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { Button } from './custom/Button'


export default function SliderItem({ title, image, subtitle }) {
  console.log('title')
  return (
    <div className="h-screen relative">
      <img alt='slider' className='object-cover h-full w-screen' src={image} />
       <div class="absolute bg-black top-0 w-full h-full opacity-40">
  </div>
  <div className=' text-center text-white absolute bottom-40 right-0 left-0'>

  <h1 class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
      <span class="block xl:inline">{ title }</span>
      {/* <span class="block text-indigo-600 xl:inline">online business</span> */}
    </h1>
    <p class="mt-3 font-light md:px-20 text-base md:mx-auto sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
      { subtitle }
    </p>
    <div class="mt-5 sm:mt-8 sm:flex justify-center">
      <div class="">
        <Button
       text={"Learn More"} >
       </Button>
      </div>
      <div class="mt-3 sm:mt-0 sm:ml-3">
      <Button
       variant={true}
       text={"Get Started"} >
       </Button>
      </div>
    </div>
  </div>
    </div>
  )
}
