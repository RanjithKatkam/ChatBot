import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from "./BotAvatar"
import UserAvatar from "./UserAvatar"
import GotButton from "./GotButton"
import SlotSelection from './SlotSelection';
import SecondsPage from '../Components/SecondsPage';

const config = {
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system!`, {widget: "GotButton"}),
  ],
  botName: "Ratham Student Info",
  customComponents: {
    botAvatar:  (props) => <BotAvatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />
  },
  widgets: [
    {
      widgetName: "GotButton",
      widgetFunc: (props) => <GotButton {...props} />
    },
    {
      widgetName: "SlotSelection",
      widgetFunc: (props) => <SlotSelection {...props} />
    },
    {
      widgetName: "SecondsPage",
      widgetFunc: (props) => <SecondsPage {...props} />
    }
  ]
};

export default config;