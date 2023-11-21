import React, { useState, useEffect } from 'react';
import Message from './Message';
import './chat.css'
import sendQueryToAskAI from './AskAiService';
import arfLogo from '../assets/ArfNew.png'

const Chat = () => {
    const YOUR_ASKAI_ID = process.env.REACT_APP_ASKAI_ID;
    const YOUR_ASKAI_API_KEY = process.env.REACT_APP_ASKAI_API_KEY;

    const [suggestedQuestions, setSuggestedQuestions] = useState([]);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    const fetchInitialSuggestedQuestions = async () => {
        try {
            const response = await sendQueryToAskAI('real estate', YOUR_ASKAI_ID, YOUR_ASKAI_API_KEY);
            if (response && response.suggestedQuestions) {
                setSuggestedQuestions(response.suggestedQuestions);
            }
        } catch (error) {
            console.error('Error fetching initial suggested questions:', error);
        }
    };

    useEffect(() => {
        console.log("TEST")
        fetchInitialSuggestedQuestions();
    }, []);

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
            console.log(response)
            setSuggestedQuestions(response.suggestedQuestions);

            setMessages(prevMessages => [...prevMessages, { content: response.answer, role: 'assistant' }]);
        } catch (error) {
            setError(error.message);
        }
    
        setInput('');
    };

    return (
        <>
        <div className='centered-container'>
            <div className='logoContainer'>
                <h1>Artificial Realty Friend</h1>
                <img src={arfLogo} alt='ARF logo' />
            </div>

            <div className="chat-container">
                <div className="message-area">
                    {messages.map((msg, index) => (
                        <Message key={index} content={msg.content} role={msg.role} />
                    ))}
                </div>
                {suggestedQuestions.length > 0 && (
                    <div className="suggested-questions">
                        <h3>Suggested Questions</h3>
                        <ul>
                            {suggestedQuestions.map((question, index) => (
                                <li key={index} onClick={() => setInput(question)}>
                                    {question}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
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
            </div>
        </div>
        </>
    );
};

export default Chat;
