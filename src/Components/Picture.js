import React from "react";

export default function Picture({ url }) {
  return (
    <div className="picture-card">
      <img key={url} src={url} alt="Space" />
    </div>
  );
}
