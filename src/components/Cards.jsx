import BrandIcon from "../assets/Brandicon.png"

export default function Cards() {
    return (
        <div className="card">
            <img className="cardIcon" src={BrandIcon} />
            <h1>Easy Deployment</h1>
            <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
        </div>
    )
}