import "./Hero.scss";
// import PersonalImage from "../../assets/Images/magret.png";
import Button from "../Button/Button";

export default function Hero({ ellipsisCLick }) {
    return (
        <>
            <section className={ellipsisCLick ? "hero--margin" : "hero"}>
                <h1 className="hero__header">Hello! I am</h1>
                <h1 className="hero__subheader">Abiodun Magret Oyedele</h1>
                <h1 className="hero__title">FullStack Software Developer</h1>
                <p className="hero__texts">
                    I excel at building efficient, user-focused web applications
                    by seamlessly integrating front-end and back-end technologies.
                </p>

                <Button name={"My Resume"}/>
            </section>

            {/* <section className="hero__images">
                <div className="hero__box">
                    <img className="hero__image" src={PersonalImage} alt="Personal Picture" />
                </div>
            </section> */}
        </>
    )
}