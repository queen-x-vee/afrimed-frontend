import React, { useState } from "react";
import Navbar from "../components/doctors-components/Navbar";
import Profile from '../assests/doctors-dashboard-assets/doctorsprofilepic.svg'
import Video from '../assests/messages/message-video.svg'
import Phone from '../assests/messages/message-phone.svg'
import Actions from '../assests/messages/message-actions.svg'

function MessagePage() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    if (newMessage.trim() === "") {
      return; // Prevent sending empty messages
    }
    setMessages([...messages, { text: newMessage, sender: "Me" }]);
    setNewMessage("");
  };

  return (
    <div className="h-full flex m-0 p-0">
      <Navbar />
      <div className="md:ml-[20rem] w-full h-screen flex bg-[#F7F7F7]">
        <div className="sidebar">
          <div className="contacts">
            {/* List of contacts */}
            <div className="contact">Contact 1</div>
            <div className="contact">Contact 2</div>
            <div className="contact">Contact 3</div>
            {/* Add more contacts as needed */}
          </div>
        </div>
        <div className="chat-window h-[90%] bg-[#F7F7F7] ">
          
            <nav className="px-6 py-8 flex justify-between items-center bg-white">
              
              <div className="flex flex-row gap-x-10 items-center">
                <div className="flex flex-row items-center gap-x-2">
                  <div className="flex  justify-center items-center">
                    <img src={Profile} alt="profile" />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-x-1">
                    <span className="text-base  font-medium">Taiwo Ojo</span>
                    <span className="text-xs md:text-sm text-[#000000]/70">
                      30 years old
                    </span>
                  </div>
                </div>
              </div>
              <span className="flex  justify-between items-center gap-2">
              <img src={Phone} alt="phone" />
                        <img src={Video} alt="video" />
                        
                        <img src={Actions} alt="actions" />
                      </span>
            </nav>
          
          {/* Chat messages */}

          <div className="bg-[#5D34F3] mb-10 px-4 py-2.5 rounded-t-2xl rounded-l-2xl rounded-r-md mr-10 md:mr-14 ml-5 mt-7">
            <span className="text-xs">AI: </span>
            <span className="text-xs font-normal">
              That is Lumina Syndrome is a fictional illness Lorem ipsum dolor
              sit amet consectetur. Imperdiet non sit suspendisse velit tellus
              nibh. Odio morbi odio sagittis a purus sollicitudin mauris. Orci
              at viverra feugiat odio viverra. Lectus feugiat se
            </span>
          </div>

          {messages.map((message, index) => (
            <div
              key={index}
              className="bg-[#4E5AC3]/15 mb-10 px-4 py-2.5 rounded-t-2xl rounded-l-2xl rounded-r-md ml-10 md:ml-14 mr-5"
            >
              <span className="text-xs">{message.sender}: </span>
              <span className="text-xs font-normal">{message.text}</span>
            </div>
          ))}

          {/* Add more messages as needed */}
          <form onSubmit={handleMessageSubmit} className=" mt-auto">
            <div className="message-input flex flex-row justify-between items-center m-4 p-4 bg-[#F4F4F4] rounded-lg">
              {/* Input area for typing messages */}
              <input
                type="text"
                placeholder="Type your message here"
                value={newMessage}
                onChange={handleMessageChange}
                className="w-11/12 h-full border-none outline-none bg-transparent"
              />
              <button type="submit">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1307 1.36312L3.81329 4.53496C-1.10524 6.6629 -0.862834 9.4336 4.35049 10.6751L5.92727 11.0518C6.38675 11.1654 6.76339 11.4814 6.95505 11.9142L7.59341 13.3962C9.72135 18.3148 12.4867 18.0788 13.7336 12.8591L15.5866 5.102C16.4178 1.62219 14.4133 -0.0597661 11.1307 1.36312ZM12.1073 5.69623L9.21471 9.14343C8.99509 9.40516 8.59592 9.44009 8.33419 9.22047C8.07246 9.00085 8.03754 8.60168 8.25715 8.33995L11.1497 4.89275C11.3693 4.63102 11.7685 4.59609 12.0302 4.81571C12.292 5.03533 12.3269 5.4345 12.1073 5.69623Z"
                    fill="#5D34F3"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>

        <style jsx>{`
          .sidebar {
            flex: 0 0 30%;
            background-color: #f2f2f2;
            padding: 20px;
            border-right: 1px solid #ccc;
            overflow-y: auto;
          }

          .contacts {
            /* Styles for contact list */
          }

          .contact {
            margin-bottom: 10px;
            padding: 10px;
            cursor: pointer;
            border-radius: 5px;
          }

          .chat-window {
            flex: 1;
            display: flex;
            flex-direction: column;
            
            overflow-y: auto;
          }

          .message {
            margin-bottom: 10px;
            padding: 10px;
            border-radius: 5px;
          }

          .incoming {
            background-color: #e5e5ea;
          }

          .outgoing {
            background-color: #dcf8c6;
          }

          .message-input {
            margin-top: auto;
            display: flex;
          }

          .message-input button {
            cursor: pointer;
          }
        `}</style>
      </div>
    </div>
  );
}

export default MessagePage;
