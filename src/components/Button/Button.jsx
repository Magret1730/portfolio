// Button.jsx
import "./Button.scss";

export default function Button({ name, style, href, download }) {
  if (href) {
    return (
      <a 
        href={href} 
        download={download} 
        className={`button ${style}`}
      >
        {name}
      </a>
    );
  }

  return (
    <button className={`button ${style}`}>
      {name}
    </button>
  );
}

