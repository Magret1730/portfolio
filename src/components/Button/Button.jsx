import posthog from "posthog-js";
import "./Button.scss";

export default function Button({ name, style, href, download, location }) {
  const handleClick = () => {
    posthog.capture('button_clicked', {
      button_name: name,
      button_style: style,
      href: href || null,
      is_download: !!download,
      page_url: window.location.pathname,
      location: location || null,
    });
  };

  if (href) {
    return (
      <a 
        href={href} 
        download={download} 
        className={`button ${style}`}
        onClick={handleClick}
      >
        {name}
      </a>
    );
  }

  return (
    <button
      className={`button ${style}`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}

