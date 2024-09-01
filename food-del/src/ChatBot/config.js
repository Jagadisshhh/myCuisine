import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import ChatBotComponent from '../App';

const config =(closeChat) => ({
  botName: 'Cuisine Genie',
  initialMessages: [
    createChatBotMessage(`Can't decide?? We have your back, what mood is your tummy in for today?`),
  ],
  customComponents: {
    header: () => <> <div style={{ backgroundColor: '#f5821e', padding: '8px 10px', color: '#6a2222',letterSpacing: '0.5px',fontSize: '1.2rem',display:'flex',justifyContent: 'space-between', fontWeight: '600',borderTopLeftRadius: '10px',borderTopRightRadius: '10px' }}> <span>Cuisine Genie 🧞</span><span onClick={closeChat}>✕</span></div></>,
    botMessageBox: (props) => <ChatBotComponent {...props} />,
    userMessageBox: (props) => <ChatBotComponent {...props} isUser />,
    botAvatar: (props) => <div className='botAvatar'>C</div> ,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: 'rgb(255 165 47)',
    },
    chatButton: {
      backgroundColor: '#f5821e',
    }
  },
});

export default config;
