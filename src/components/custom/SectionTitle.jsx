import React from 'react'

const SectionTitle = ({text}) => {
    return (
        <>
        <h2 className="md:text-6xl font-extrabold text-4xl mt-0 mb-2">
            {text ? text : 'Section Title'}
        </h2>
        </>
    )
}
export default SectionTitle