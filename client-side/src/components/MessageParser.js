class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello")) {
      this.actionProvider.greet();
    }

    
      this.actionProvider.handleOptions();
    
  }
}

export default MessageParser;
