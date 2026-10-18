import { useState } from "react";

export default function Img({ name, alt = "", className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={`${className} img-fallback`} role="img" aria-label={alt || name} title={name} />;
  }
  return (
    <img
      className={className}
      src={`${import.meta.env.BASE_URL}images/${name}`}
      alt={alt}
      onError={() => setFailed(true)}
    />
  );
}
