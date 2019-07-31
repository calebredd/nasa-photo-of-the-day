import React from "react";

export default function Picture({ url, setDate, randomDate }) {
  if (!{ url }) return <h3>Loading...</h3>;
  
  return (
    <div className="picture-card">
      <img key={url} src={url} alt="Nasa" />
    </div>
  );
}
