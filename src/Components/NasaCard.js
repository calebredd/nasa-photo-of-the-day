import React from "react";
import Title from "./Title";
import Picture from "./Picture";
import Explanation from "./Explanation";

export default function NasaCard({ title, url, explanation }) {
  return (
    <div className="nasa-card">
      <Title title={title} />
      <Picture url={url} />
      <Explanation explanation={explanation} />
    </div>
  );
}
