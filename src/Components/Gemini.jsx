"use client";
import { useState } from 'react';
import axios from 'axios';

export default function Gemini() {
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async () => {
    // Add user message to chat history
    const newMessage = { text: userMessage, type: 'user' };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      
      const result = await axios.post('/api/chat', { userMessage });
      const aiMessage = { text: result.data.response, type: 'ai' };
      
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      
      const errorMessage = { text: 'Error occurred', type: 'error' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      
      setUserMessage('');
    }
  };

  return (
    <div className='h-screen p-10 bg-slate-100 flex flex-col'>
      <div className='flex-1 overflow-y-auto p-2 border border-gray-300 bg-white'>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`my-2 p-2 rounded-lg max-w-xs ${msg.type === 'user' ? 'bg-blue-600 text-white self-end ml-auto' : 'bg-gray-300 text-black self-start'}`}
            style={{ alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start' }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className='flex gap-2 mt-4'>
        <input
          className='p-2 w-full border border-gray-300 rounded-lg'
          type='text'
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Enter your message here..."
        />
        <button
          className="bg-blue-400 px-4 py-2 rounded-lg text-white"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
      <div className='flex justify-center items-center mt-4'>
        <label className='text-gray-600 text-sm'>
          The AI-generated content is for informational purposes only and should not replace professional advice.
        </label>
      </div>
    </div>
  );
}


// "use client";
// import { useState } from 'react';
// import axios from 'axios';

// export default function Gemini() {
//   const [userMessage, setUserMessage] = useState('');
//   const [response, setResponse] = useState('');
//   const [message, setMessage] = useState(''); 

//   const handleSendMessage = async () => {
//     setMessage(userMessage);
//     try {
//       const result = await axios.post('/api/chat', { userMessage });
//       setResponse(result.data.response);
//     } catch (error) {
//       setResponse('Error occurred');
//     }
//   };
//   return (
//     <div className='h-screen p-10 bg-slate-100'>
//       <div className='h-[90%] relative'>
//         <p className='bg-blue-600 max-w-[50%] text-white absolute px-3 py-2 right-0'>{message}</p>
//         <br />
//         <br />
//         <p className='bg-blue-600 max-w-[50%] text-white absolute px-3 py-2'>{response}</p>
//       </div>
//       <div className='flex justify-center'>
//       <input
//         className='p-2 w-full border'
//         type='text'
//         value={userMessage}
//         onChange={(e) => {
//           setUserMessage(e.target.value)
//         }}
//         placeholder="Enter your message here..."
//       ></input>
//       <button className=" bg-blue-400 px-3 rounded-lg" onClick={handleSendMessage}>Send</button>
//       </div>
//       <div className='flex justify-center items-center'>
//         <label className=' items-center p-2'>The AI-generated content is for informational purposes only and should not replace professional advice.</label>
//       </div>
//     </div>
//   );
// }
