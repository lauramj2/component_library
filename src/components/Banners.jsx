import React from "react"

export default function Banners({title, info, variation, single}) {
    return (
        <>
        {single ? 

        (<div className={variation}>
            <h1>{title}</h1>
        </div>)
        :
        (<div className={variation}>
            <h1>{title}</h1>
            <p>{info}</p>
        </div>) }
        </>
    )
}