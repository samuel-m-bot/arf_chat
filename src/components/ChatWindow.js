import React, { useState } from 'react';
import Message from './Message';
import sendQueryToAskAI from './AskAiService';

const Chat = () => {
    const YOUR_ASKAI_ID = '1698703745439x613804390360547300'
    const YOUR_ASKAI_API_KEY= 'vkMmxaiqIQTSaHuW6DndMyDx7os5er'
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    const sendMessage = async () => {
        if (input.length > 400) {
            setError("This question is longer than 400 characters.");
            return;
        }
    
        // Reset error and update messages array
        setError('');
        setMessages([...messages, { content: input, role: 'user' }]);
    
        try {
            const response = await sendQueryToAskAI(input, YOUR_ASKAI_ID, YOUR_ASKAI_API_KEY);
            // Process the response here
            // For example, add the response to the messages array
            setMessages(prevMessages => [...prevMessages, { content: response.answer, role: 'assistant' }]);
        } catch (error) {
            setError(error.message);
        }
    
        setInput('');
    };

    return (
        <div className="chat-container">
            <div className="message-area">
                {messages.map((msg, index) => (
                    <Message key={index} content={msg.content} role={msg.role} />
                ))}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
            {error && <div className="error-message">{error}</div>}
            {/* Suggested questions area */}
            {/* ... */}
        </div>
    );
};

export default Chat;
