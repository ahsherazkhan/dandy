import React from "react";
import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "How long does the window tinting process take?",
      handler: props.actionProvider.handleJavascriptQuiz,
      id: 1,
    },
    { text: "Are there any discounts or promotions currently available?", handler: props.actionProvider.handleQuestion2, id: 2 },
    { text: "How can I schedule an appointment for window tinting?", handler: props.actionProvider.handleQuestion3, id: 3 },
    { text: "What brands or types of window tint do you use?", handler: props.actionProvider.handleQuestion4, id: 4 },
    { text: "Is there a warranty on your window tinting?", handler: props.actionProvider.handleQuestion5, id: 5 },
    { text: "Are there customer reviews or testimonials available?", handler: props.actionProvider.handleQuestion6, id: 6 },
    { text: "Contact us on WhatsApp", handler: props.actionProvider.handleQuestion7, id: 7 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
