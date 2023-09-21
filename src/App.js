import { Routes, Route } from 'react-router-dom';
import 'react-chatbot-kit/build/main.css';

import './App.css';
import MyChatBot from "./Components/MyChatBot"
import ExitPage from "./Components/ExitPage"
import ChatBot from "./ChatBot/ChatBot";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MyChatBot />} />
      <Route path="/chatbot" element={<ChatBot />} />
      <Route path="/exit" element={<ExitPage />} />
    </Routes>
  )
  
}

export default App;
