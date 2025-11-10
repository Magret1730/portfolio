import "./Icon.scss";
import posthog from "posthog-js";

const Icon = ({link, component, style, linkStyle, icon_name}) => {
    const handleClick = () => {
    posthog.capture('icon_clicked', {
      button_link: link,
      button_component: component.type.name || 'icon',
      button_linkStyle: linkStyle || null,
      button_style: style,
      href: link || null,
      is_download: !!download,
      page_url: window.location.pathname,
      location: location || null,
      icon_name: icon_name || (component.type.displayName || component.type.name),
    });
  };

  return (
    <div className={`icon ${style}`}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={linkStyle}
        onClick={handleClick}
      >
        {component} {'good'}
      </a>
    </div>
  )
}

export default Icon;