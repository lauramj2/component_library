import check from "../assets/check.png"
import exclamation from "../assets/exclamation.png"
import icon from "../assets/icon.png"
import x from "../assets/x.png"

export default function Banners({status, single}) {
    const icons = {
        success: check,
        warning: exclamation,
        error:  x,
        neutral: icon      
    }

    const titles = {
        success: "Congratulations!",
        warning: "Attention",
        error:  "There is a problem with your application",
        neutral: "Update available"
    }

    const text = {
        success: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
        warning: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
        error:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
        neutral: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
    }
    

    return (
        <>
        {single ? 

        (<div className={`banner ${status}`}>
            <div className="titleDiv">
                <img src={icons[status]}/>
                <h1 className={`${status}-title`}>{titles[status]}</h1>
            </div>
        </div>)
        :
        (<div className={`banner ${status}`}>
           <div className="titleDiv">
                <img src={icons[status]}/>
                <h1 className={`${status}-title`}>{titles[status]}</h1>
            </div>
            <div className="infoDiv">
                <p className={`${status}-info`}>{text[status]}</p>
            </div>
        </div>) }
        </>
    )
}