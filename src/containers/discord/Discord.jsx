import React from "react";
import './discord.css';
import WidgetBot from "@widgetbot/react-embed";
function Discord() {
  return (
    <div className="step0_discord">
      <WidgetBot
          server="894034596876910613"
          channel="894034597329899551"
          width="400"
          height="600"
        />
        <WidgetBot
          server="1019387494908842075"
          channel="1019409462139822161"
          width="400"
          height="600"
        />
    </div>
  );
}

export default Discord;
