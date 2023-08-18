import React, { useState } from 'react';
import OpenAI from 'openai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const apiKey = process.env.REACT_APP_OPENAI_API_KEY; // Thay thế bằng API key của bạn
const openai = new OpenAI({ apiKey: apiKey });

function Chatbox() {
    const [userMessage, setUserMessage] = useState('');
    const [botResponse, setBotResponse] = useState('');

    const handleSendMessage = async () => {
        try {
            const response = await openai.Completions.create({
                engine: 'davinci',
                prompt: userMessage,
                max_tokens: 50
            });
            const botReply = response.choices[0].text.trim();
            setBotResponse(botReply);
        } catch (error) {
            console.error('Error:', error);
            toast.error('Đã xảy ra lỗi khi trò chuyện với bot.');
        }
    };

    return (
        <div className="App">
            <h1>Chat with OpenAI</h1>
            <div className="chat-container">
                <div className="message-box">
                    <div className="message user">{userMessage}</div>
                    {botResponse && <div className="message bot">{botResponse}</div>}
                </div>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Nhập câu hỏi của bạn..."
                        value={userMessage}
                        onChange={(e) => setUserMessage(e.target.value)}
                    />
                    <button onClick={handleSendMessage}>Gửi</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Chatbox;