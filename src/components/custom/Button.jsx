import React from "react";

export const Button = ({text, dark}) => {
    return (
        <>
        <button className={ 'rounded-large py-2 px-4  bg-indigo-600 hover:bg-indigo-700'}>
            { text ? text : 'Button Label'}
        </button>
        </>
    )
}
