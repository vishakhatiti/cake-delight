import React from "react";

function ImageFrame({
  src,
  alt,
  className = "",
  loading = "lazy"
}) {
  return (
    <div className={`image-frame ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
      />
    </div>
  );
}

export default ImageFrame;