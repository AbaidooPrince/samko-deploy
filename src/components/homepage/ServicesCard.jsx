import React from "react";
import { Button } from "../custom/Button";

export const ServicesCard = () => {
    const image = "https://images.unsplash.com/photo-1649185885081-91f76cb326bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";  
    return (
        <>
        <div className="md:h-[500px]">

        <div className="grid md:grid-cols-2">
            {/* image  columns  */}
            <div className="md:basis-1/2 basis-full">
                <img className="w-full rounded-tl-large object-cover md:rounded-tl-large" alt="service_image" src={image}/>
            </div>
             {/* description colum  */}
            <div className="md:basis-1/2 basis-full sm:basis-full md:rounded-tr-large w-full bg-white p-10">
                <div className="prose">
                    <div className="text-2xl font-bold">Installation</div>
                    <div>Sub description</div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, facere! Est, nemo! Omnis suscipit delectus ad asperiores voluptates, quia maxime vitae, doloribus cumque officiis perspiciatis, provident labore architecto facere libero?
                    </p>
                    <div>
                        <Button></Button>
                    </div>
                </div>

            </div>
        </div>
        </div>
        </>
    )
}