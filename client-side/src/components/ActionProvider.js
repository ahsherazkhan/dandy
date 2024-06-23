
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello friend.");
    this.addMessageToState(message);
  };

  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
      "Fantastic. Here is your Answer. Good luck!",
      {
        widget: "javascriptQuiz",
      }
    );

    this.addMessageToState(message);
  };
  handleQuestion2 = () => {
    const message = this.createChatBotMessage(
      "Fantastic. Here is your Answer. Good luck!",
      {
        widget: "Question2",
      }
    );

    this.addMessageToState(message);
  };
  handleQuestion3 = () => {
    const message = this.createChatBotMessage(
      "Fantastic. Here is your Answer. Good luck!",
      {
        widget: "Question3",
      }
    );

    this.addMessageToState(message);
  };
  handleQuestion4 = () => {
    const message = this.createChatBotMessage(
      "Fantastic. Here is your Answer. Good luck!",
      {
        widget: "Question4",
      }
    );

    this.addMessageToState(message);
  };
  handleQuestion5 = () => {
    const message = this.createChatBotMessage(
      "Fantastic. Here is your Answer. Good luck!",
      {
        widget: "Question5",
      }
    );

    this.addMessageToState(message);
  };
  handleQuestion6 = () => {
    const message = this.createChatBotMessage(
      "Fantastic. Here is your Answer. Good luck!",
      {
        widget: "Question6",
      }
    );

    this.addMessageToState(message);
  };
  handleQuestion7 = () => {
    const phoneNumber = encodeURIComponent("+61455121312");
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.location.href = whatsappLink; 
    
  };
  handleOptions = () => {
    const message = this.createChatBotMessage(
      "Fantastic. Here is your Answer. Good luck!",
      {
        widget: "options",
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
