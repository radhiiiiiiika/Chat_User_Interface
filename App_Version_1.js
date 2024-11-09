import './App.css';
import React from 'react';

const App = () => {
    return (
        <div className="container">
            <div className="message-box user" style={{ '--d': '0s' }}>
                Hello!
                <div className="chat-bubble right"> </div>
            </div>
            <div className="message-box ai" style={{ '--d': '3s' }}>
                Hello there! How may I help you today?
                <div className="chat-bubble left"> </div>
            </div>
            <div className="message-box user" style={{ '--d': '12s' }}>
                A huge long paragraph of some random question...
                <div className="chat-bubble right"> </div>
            </div>
        </div>
    );
};

export default App;