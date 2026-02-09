import React from "react"

export default function Banners({title, info, variation}) {
    return (
        <div className={variation}>
            <h1>{title}</h1>
            <p>{info}</p>
        </div>
    )
}