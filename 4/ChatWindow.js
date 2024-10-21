// src/ChatWindow.js
import React, { useState } from 'react';
import './ChatWindow.css'; // Import the CSS file

const ChatWindow = () => {
    const [messages, setMessages] = useState([]); // State to hold chat messages
    const [inputValue, setInputValue] = useState(''); // State for input field

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            // Add the user's message to the chat log
            setMessages([...messages, { text: inputValue, sender: 'user' }]);
            setInputValue(''); // Clear the input field

            // Simulate bot response (you can replace this with actual bot logic)
            setTimeout(() => {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'Bot response to: ' + inputValue, sender: 'bot' }
                ]);
            }, 1000);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage(); // Send message on Enter key press
            event.preventDefault(); // Prevent default behavior (like form submission)
        }
    };

    return (
        <div className="chat-window">
            <div className="chat-log">
                {messages.map((msg, index) => (
                    <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                        <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <div className="input-section">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown} // Add keydown event listener
                    className="input-field" // Use CSS class
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage} className="send-button">Send</button> {/* Use CSS class */}
            </div>
        </div>
    );
};

export default ChatWindow;