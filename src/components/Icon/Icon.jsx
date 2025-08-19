import "./Icon.scss";

const Icon = ({link, component, style, linkStyle}) => {
  return (
    <div className={`icon ${style}`}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={linkStyle}
      >
        {component}
      </a>
    </div>
  )
}

export default Icon;