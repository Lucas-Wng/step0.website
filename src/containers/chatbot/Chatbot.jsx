import React, { useEffect } from "react";
import "./chatbot.css";

const Chatbot = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            window.botpressWebChat.init({
                composerPlaceholder: "Chat with Step0 Therapy Bot",
                botConversationDescription:
                    "This chatbot was built surprisingly fast with Botpress",
                botId: "f8fa3cd0-f83d-491a-856a-e2f92bab8a1a",
                hostUrl: "https://cdn.botpress.cloud/webchat/v1",
                messagingUrl: "https://messaging.botpress.cloud",
                clientId: "f8fa3cd0-f83d-491a-856a-e2f92bab8a1a",
                webhookId: "6dca53f6-a7b3-4fcc-8887-39441bcf86bb",
                lazySocket: true,
                themeName: "prism",
                botName: "Step0 Therapy Bot",
                frontendVersion: "v1",
                theme: "prism",
                themeColor: "#2563eb",
            });
        };
    }, []);

    return <div id="webchat" />;
};

export default Chatbot;
