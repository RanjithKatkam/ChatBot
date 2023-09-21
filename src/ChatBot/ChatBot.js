import Chatbot from 'react-chatbot-kit';
import './ChatBot.css';
import ActionProvider from "./ActionProvider";
import config from "./config";
import MessageParser from "./MessageParser"


const RenderChatbot = () => {
    return (
      <div className="chat-bot-main-css">
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
      </div>
    );
  }

export default RenderChatbot