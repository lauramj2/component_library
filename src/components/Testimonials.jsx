import Logo from "../assets/Logo.png"
import Path from "../assets/Path.png"

export default function Testimonials({logo = Logo, name = "Jane Doe", company = "Company", role = "CEO",
    text = '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."'}) {

    return (
        <div className="testCard">
            <div className="testimonial">
                <img className="testLogo" src={logo} />
                <div className="mobileText">
                    <h1 className="testText">{text}</h1>
                    <p className="testName"><span className="spanName">{name}</span> <img src={Path} /> <span className="spanRole">{company}, {role}</span></p>
                </div>
            </div>
        </div>
    )
}