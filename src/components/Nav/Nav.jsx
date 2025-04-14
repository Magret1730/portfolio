import DarkIcon from "../../assets/Icons/dark-mode.png";
import "./Nav.scss";
import Ellipsis from "../../assets/Icons/ellipsis.png";
import EllipsisClose from "../../assets/Icons/ecclipsisClose.png";

export default function Nav({ handleEllipsisClick, ellipsisCLick }) {
    return (
        <section className="nav">
            <article className="nav__box">
                <section className="nav__logo">
                    Oyedele
                </section>

                <section className="nav__bright">
                    <img className="nav__icon" src={DarkIcon} alt="Dark-Mode-Icon" />
                </section>

                <section className="nav__ellipsis"  onClick={handleEllipsisClick}>
                    <img src={ ellipsisCLick ? EllipsisClose : Ellipsis } alt="Ellipsis" />
                </section>
            </article>

            <section className={ ellipsisCLick ? "nav__links--display" : "nav__links"}>
                <div className="nav__link-container">
                    <a className="nav__link" href="#About">About</a>
                </div>
                <div className="nav__link-container">
                    <a className="nav__link" href="#Skills">Skills</a>
                </div>
                <div className="nav__link-container">
                    <a className="nav__link" href="#Resume">Resume</a>
                </div>
                <div className="nav__link-container">
                    <a className="nav__link" href="#Projects">Projects</a>
                </div>
                <div className="nav__link-container">
                    <a className="nav__link" href="#Contact">Contact</a>
                </div>
            </section>
        </section>
    )
}