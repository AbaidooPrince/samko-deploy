import React from "react";
import { Button } from "./custom/Button";

const ProductItem = (props) => {
    const image = "https://images.unsplash.com/photo-1649185885081-91f76cb326bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
    
    return (
        <>
        <div className="card roundedLG outline outline-1 outline-gray-400">
            {/* image  */}
            <div className="p-0 w-full">
                <img className="h-48 roundedLG rounded-b-none bg-cover w-full" alt="alt-imag" src={image}></img>
            </div>
            <div className="text-center p-4">
                <div className="text-md font-semibold">
                    Air Condition
                </div>
                <div className="h-12 text-gray-600">
                <small>One of the key thing that is supper important to our client is the mobile</small>
                </div>
                <div className="text-md font-semibold p-4">
                    GHc. 203.00
                </div>
                <div className="place-self-end">
                    <Button></Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductItem