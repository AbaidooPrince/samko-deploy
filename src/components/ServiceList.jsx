import { UserCircleIcon } from "@heroicons/react/solid";
import React from "react";


const ServiceList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-grow prose">
                <div className=" md:basis-1/4">
                    <UserCircleIcon className="justify-items-center h-16 md:h-24"></UserCircleIcon>
                </div>
                <div className=" md:basis-3/4">
                    <h4 className="text-xl mt-0 font-bold">Installation</h4>
                    <p>You can also use variant modifiers to target media queries like responsive bonly medium screen sizes and above.

</p>
                </div>
            </div>


            {/* loop starts here 
             */}
            <div className="flex flex-grow prose">
                <div className=" md:basis-1/4">
                    <UserCircleIcon className="justify-items-center h-16 md:h-24"></UserCircleIcon>
                </div>
                <div className=" md:basis-3/4">
                    <h4 className="text-xl mt-0 font-bold">Installation</h4>
                    <p>You can also use variant modifiers to target media queries like responsive bonly medium screen sizes and above.

</p>
                </div>
            </div>

            <div className="flex flex-grow prose">
                <div className=" md:basis-1/4">
                    <UserCircleIcon className="justify-items-center h-16 md:h-24"></UserCircleIcon>
                </div>
                <div className=" md:basis-3/4">
                    <h4 className="text-xl mt-0 font-bold">Installation</h4>
                    <p>You can also use variant modifiers to target media queries like responsive bonly medium screen sizes and above.

</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceList