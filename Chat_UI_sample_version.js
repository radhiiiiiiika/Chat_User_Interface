import React, { useState } from 'react';
import './App.css';

function App() {
    const [chats] = useState([
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
        { id: 3, name: 'User 3' },
        { id: 4, name: 'User 4' },
        { id: 5, name: 'User 5' }
    ]);

    const [selectedChat, setSelectedChat] = useState(1);
    const [allChats, setAllChats] = useState({
        1: [{ text: 'Hiii', isUser: true }, { text: 'Hello there! How may I help you today?', isUser: false }],
        2: [{ text: 'Hiii', isUser: true }, { text: 'Hello there! How may I help you today?', isUser: false }],
        3: [{ text: 'Hiii', isUser: true }, { text: 'Hello there! How may I help you today?', isUser: false }],
        4: [{ text: 'Hiii', isUser: true }, { text: 'Hello there! How may I help you today?', isUser: false }],
        5: [{ text: 'Hiii', isUser: true }, { text: 'Hello there! How may I help you today?', isUser: false }]
    });

    const [input, setInput] = useState('');

    const sendMsg = () => {
        const userMsg = {
            text: input,
            isUser: true
        };

        setAllChats(prevMessages => ({
            ...prevMessages,
            [selectedChat]: [...prevMessages[selectedChat], userMsg]
        }));

        setInput('');

        const aiMsg = {
            text: "An explanation from the AI bot",
            isUser: false
        };

        setTimeout(() => {
            setAllChats(prevMessages => ({
                ...prevMessages,
                [selectedChat]: [...prevMessages[selectedChat], aiMsg]
            }));
        }, 3000);
    };

    return (
        <div className="app">
            <div className="sidebar">
                <h2>Chats</h2>
                {chats.map(chat => (
                    <div
                        key={chat.id}
                        className={`chat ${selectedChat === chat.id ? 'selected' : ''}`}
                        onClick={() => setSelectedChat(chat.id)}
                    >
                        {chat.name}
                    </div>
                ))}
            </div>

            <div className="chat-box">
                <h2>{chats.find(chat => chat.id === selectedChat)?.name}</h2>
                <div className="container">
                    {allChats[selectedChat].map((msg, index) => (
                        <div
                            key={index}
                            className={`message-box ${msg.isUser ? 'user' : 'ai'}`}
                            style={{ '--d': '0s' }}
                        >
                            {msg.text}
                            <div className={`chat-bubble ${msg.isUser ? 'right' : 'left'}`}></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="input-area">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter a message..."
                    onKeyPress={(e) => e.key === "Enter" && sendMsg()}
                />
                <button onClick={sendMsg}>SEND</button>
            </div>
        </div>
    );
}

export default App;
