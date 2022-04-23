import React from "react";

export const Button = ({text, variant}) => {
    return (
        <>
        <button className={`${ variant ? 'bg-white hover:bg-samko-secondary rounded-large py-2 px-4 focus:bg-samko-secondary hover:text-white text-samko-secondary focus:text-white focus:ring-1 ring-offset-2 ring-samko-secondary' : 'bg-samko-primary hover:bg-samko-high text-white focus:ring-1 focus:bg-samko-high ring-offset-2 ring-samko-high rounded-large py-2 px-4'}`}>
            { text ? text : 'Button Label'}
        </button>
        </>
    )
}
