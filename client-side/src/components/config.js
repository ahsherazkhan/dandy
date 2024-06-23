import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options/Options";
import Quiz from "./Quiz/Quiz";
import downloadImage from '../assets/img/logo.svg';

const config = {
  botName: "Dandy Tints",
  botAvatar: downloadImage, 
  floating: true,
  initialMessages: [
    createChatBotMessage(`How can I help you?`, {
      user:true,
      trigger:"options"
    }),
  ],
  customStyles: {
    botMessageBox: {
        backgroundColor: 'purple',
    },
    chatButton: {
        backgroundColor: "purple",
        color:"white"
    },
},
  widgets: [
    {
      widgetName: "options",
      id:"options",
      widgetFunc: (props) => {
      return <Options {...props} />
      },
    },
   
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => {
        // const [showQuestions, setShowQuestions] = useState(false);
        let showQuestions = false;
        return (
          <>
            {/* <Options {...props} /> */}
            <Quiz {...props} />
            {/* <Options {...props} /> */}
          </>
        );
      },
      props: {
        questions: [
          {
            question: "The window tinting process typically takes around 2-4 hours, depending on the vehicle",
            answer:
              "The window tinting process typically takes around 2-4 hours, depending on the vehicle",
            trigger:"options",
            id: 1,
          },
         
        ],
      },
    },
    {
      widgetName: "Question2",
      widgetFunc: (props) => {
        // const [showQuestions, setShowQuestions] = useState(false);
        let showQuestions = false;
        return (
          <>
            {/* <Options {...props} /> */}
            <Quiz {...props} />
            {/* <Options {...props} /> */}
          </>
        );
      },
      
      props: {
        questions: [
          {
            question: "Yes, we currently have a promotion offering 15% off on all window tinting services.",
            answer:
              "Yes, we currently have a promotion offering 15% off on all window tinting services.",
            id: 2,
          },
         
         
        ],
      },
    },
    {
      widgetName: "Question3",
      widgetFunc: (props) => {
        // const [showQuestions, setShowQuestions] = useState(false);
        let showQuestions = false;
        return (
          <>
            {/* <Options {...props} /> */}
            <Quiz {...props} />
            {/* <Options {...props} /> */}
          </>
        );
      },
      props: {
        questions: [
          {
            question: "You can schedule an appointment by calling our office at (123) 456-7890",
            answer:
              "You can schedule an appointment by calling our office at (123) 456-7890",
            id: 3,
          },
         
        ],
      },
    },
    {
      widgetName: "Question4",
      widgetFunc: (props) => {
        // const [showQuestions, setShowQuestions] = useState(false);
        let showQuestions = false;
        return (
          <>
            {/* <Options {...props} /> */}
            <Quiz {...props} />
            {/* <Options {...props} /> */}
          </>
        );
      },
      props: {
        questions: [
          {
            question: "We use premium-grade window tint from brands like 3M and LLumar.",
            answer:
              "We use premium-grade window tint from brands like 3M and LLumar.",
            id: 4,
          },
         
        ],
      },
    },
    {
      widgetName: "Question5",
      widgetFunc: (props) => {
        // const [showQuestions, setShowQuestions] = useState(false);
        let showQuestions = false;
        return (
          <>
            {/* <Options {...props} /> */}
            <Quiz {...props} />
            {/* <Options {...props} /> */}
          </>
        );
      },
      props: {
        questions: [
          {
            question: "Yes, we offer a lifetime warranty on our window tinting products.",
            answer:
              "Yes, we offer a lifetime warranty on our window tinting products.",
            id: 5,
          },
         
        ],
      },
    },
    {
      widgetName: "Question6",
      widgetFunc: (props) => {
        // const [showQuestions, setShowQuestions] = useState(false);
        let showQuestions = false;
        return (
          <>
            {/* <Options {...props} /> */}
            <Quiz {...props} />
            {/* <Options {...props} /> */}
          </>
        );
      },
      props: {
        questions: [
          {
            question: "You can find customer reviews and testimonials on our website or social media pages.",
            answer:
              "You can find customer reviews and testimonials on our website or social media pages.",
            id: 6,
            // trigger
          },
         
        ],
      },
    }
  ],
};

export default config;
