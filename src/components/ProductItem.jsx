import React from "react";
import { Button } from "./custom/Button";

const ProductItem = ({ item, description, price, image, ...data}) => {
    console.log('props', data)
    const images = "https://images.unsplash.com/photo-1649185885081-91f76cb326bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
    
    return (
        <>
        {
        <div className="card roundedLG">
            {/* image  */}
            <div className="p-0 w-full">
                <img className="h-48 roundedLG rounded-b-none object-cover sm:object-contain w-full" alt="alt-imag" src={image ? image : images}></img>
            </div>
            <div className="text-center p-4">
                <div className="text-md font-semibold">
                    { item }
                </div>
                <div className="h-12 text-gray-600 text-ellipsis overflow-hidden">
                <small>{ description }</small>
                </div>
                <div className="text-md font-semibold p-4">
                    GHc. { price }
                </div>
                <div className="place-self-end">
                    <Button></Button>
                </div>
            </div>
        </div>}
        </>
    )
}

export default ProductItem