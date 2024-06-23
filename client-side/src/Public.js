import React, { useState } from "react";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Booking } from "./components/Booking";
import { Footer } from "./components/Footer";
import Review from "./components/Review";
import { ConditionallyRender } from "react-util-kit";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "./components/ActionProvider";
import MessageParser from "./components/MessageParser";
import ButtonIcon from "./assets/img/chatbotimg.png";
import config from "./components/config";
import "./App.css";

const Public = () => {
  const [showChatbot, toggleChatbot] = useState(false);

  return (
    <div>
      <Banner />
      <Skills />
      <Projects activeTab="first" />
      <Booking />
      <div style={{ position: "relative" }}>
        <div className="app-chatbot-container">
          <ConditionallyRender
            ifTrue={showChatbot}
            show={
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            }
          />
        </div>
        <button
          className="app-chatbot-button"
          onClick={() => toggleChatbot((prev) => !prev)}
        >
          <img src={ButtonIcon} alt="Chatbot" />
        </button>
      </div>
      <Contact />
      <Review />
      <Footer />
    </div>
  );
};

export default Public;
