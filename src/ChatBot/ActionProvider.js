import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';
import SlotSelection from './SlotSelection';
import SecondsPage from "../Components/SecondsPage"


const ActionProvider = ({ createChatBotMessage, setState, children }) => {

   const handleGotButton = () => {
    const message = createClientMessage("Got It")
    updateState(message)
    setTimeout(afterGotIt, 1000);
  }

  const afterGotIt = () => {
    const message = createChatBotMessage("Pick a slot", {
      widget: "SlotSelection",
      widgetFunc: (props) => <SlotSelection {...props} />
    });
    updateState(message)
  }

  const selectedSlot = (timings) => {
    const message = createClientMessage(timings)
    updateState(message)
    setTimeout(afterSlotSelection, 1000)
  }

  const afterSlotSelection = () => {
      const message = createChatBotMessage("Enter your Name")
      updateState(message, "Name")
  }

  const handleName = () => {
    const message = createChatBotMessage("Enter your Age")
    updateState(message, "Number")
  }

  const handleAge = () => {
    const message = createChatBotMessage("Thank you. In 5 seconds, bot will exit", {
      widget: "SecondsPage",
      widgetFunc: (props) => <SecondsPage {...props} />
    });
    updateState(message)
  }

  const updateState = (message, checker="") => {
    setState((prev) => (
      {
        ...prev,
        messages: [...prev.messages, message],
        checker
      }
    ))
  }


  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGotButton,
            selectedSlot,
            handleName,
            handleAge
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;