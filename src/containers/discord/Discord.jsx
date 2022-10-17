import React from "react";
import './discord.css';
function Discord() {
  return (
    <div>
      <iframe
        src="https://discord.com/widget?id=1019387494908842075&theme=dark"
        width="350"
        height="500"
        allowtransparency="true"
        frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
}

export default Discord;
