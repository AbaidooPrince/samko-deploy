import React from 'react'

const TinyTitle = ({text}) => {
    return (
        <>
        <div className="uppercase font-light mb-2">
          <small>{ text ? text : 'Tiny title'}</small>
        </div>
        </>
    )
}
export default TinyTitle