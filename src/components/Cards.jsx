import BrandIcon from "../assets/Brandicon.png"

export default function Cards({title = "Easy Deployment", text = "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."}) {
    return (
        <div className="card">
            <img className="cardIcon" src={BrandIcon} />
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}