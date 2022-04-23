/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { Button } from './custom/Button'


export default function SliderItem() {
  return (
    <div className="bg-white p-12 h-screen">
       <div class="text-center">
    <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
      <span class="block xl:inline text-indigo-600">Data to enrich your online business</span>
      {/* <span class="block text-indigo-600 xl:inline">online business</span> */}
    </h1>
    <p class="mt-3 text-base text-gray-500 md:mx-auto sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
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
