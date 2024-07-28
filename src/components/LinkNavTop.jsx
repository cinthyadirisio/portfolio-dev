import React from "react";

function LinkNavTop({text, href}) {
  return (
    <a href={href} className="btn-nav">
      {text}{" "}
    </a>
  );
}

export default LinkNavTop;
