import React from "react"

export default function Badges({color, type, text}) {


    return (
        <>
            <button className={`${color} ${type}`}>{text}</button>
        </>
    )
}