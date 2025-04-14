import "./Button.scss";

export default function Button({name}) {
    return (
        <div className="button">
            <button className="button__box">{name}</button>
        </div>
    )
}
