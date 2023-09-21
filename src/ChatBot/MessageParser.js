import React from 'react';
import { useDispatch } from 'react-redux';
import { addName, addAge } from '../Store/StudentInfoSlice';

const MessageParser = ({ children, actions }) => {
  const dispatch = useDispatch()

  const parse = (message) => {
    if (children.props.state.checker === "Name" && isNaN(message)){
      dispatch(addName(message))
      setTimeout(actions.handleName, 1000)
    }
    if (!isNaN(message) && children.props.state.checker === "Number" ){
      dispatch(addAge(message))
      setTimeout(actions.handleAge, 1000)
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;