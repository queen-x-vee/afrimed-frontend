import React, { useEffect, useRef, useState } from "react";
import AI from "../../assests/patients-dashboard/aiemoji.svg";
import useAuthStore from "../../stores/authStore";
import Loader from "../Loader";
import useMessage from "../../stores/messageStore";

function ChatComponent() {
  const accessToken = useAuthStore((state) => state.accessToken);
  const savedMessages = useMessage((state) => state.savedMessages);
  const storeMessage = useMessage((state) => state.storeMessage);
  const [isLoading, setIsLoading] = useState(false);
  const isFirstMount = useRef(true);
  const [messages, setMessages] = useState(savedMessages);
  const [newMessage, setNewMessage] = useState("");
  const [aiResponse, setAiResponses] = useState([]);

  // --------- Add AI response to messages Array -------------
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
    } else {
      // Logic to run only on second mount
      const AIResponse = aiResponse[aiResponse.length - 1]?.text;
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: AIResponse, sender: "AI" },
      ]);


      storeMessage([...messages, { text: AIResponse, sender: "AI" }]); // save to localstorage
    }
  }, [aiResponse, storeMessage]);

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  // ---------- Handle Text AI ----------------------------------
  const handleMessageSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (newMessage.trim() === "") {
      return; // Prevent sending empty messages
    }

    setMessages([...messages, { text: newMessage, sender: "Me" }]);
    setNewMessage("");

    try {
      const res = await (
        await fetch(
          `https://api-afrimed.vercel.app/api/chats/channels/chatbot/`,
          {
            method: "POST",

            headers: {
              Authorization: `Bearer ${accessToken}`,
              "content-type": "application/json",
            },
            body: JSON.stringify({ text: newMessage }),
          }
        )
      ).json();

      if (res.response) {
        setAiResponses([...aiResponse, { text: res.response, sender: "AI" }]);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white h-full rounded-lg ">
      <div className="flex flex-col justify-center items-center">
        <img src={AI} alt="AI" className="w-6 md:w-14 pt-8" />
        <span>AI MEDIC</span>
      </div>
      <div className="chat-window h-[90%] ">
        {/* Chat messages */}

        {messages.length === 0 ? (
          <span className="text-center">How can I help you today?</span>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={` ${
                message.sender === "AI"
                  ? "bg-[#5D34F3] mr-10 rounded-bl-0 rounded-br-lg-16"
                  : "bg-[#4E5AC3]/15 rounded-br-0 rounded-bl-lg-16"
              } mb-10 px-4 py-2.5 rounded-t-2xl  ml-10 md:ml-14`}
            >
              <span className="text-xs">{message.sender}: </span>
              <span className="text-xs font-normal">{message.text}</span>
            </div>
          ))
        )}

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

            {isLoading ? (
              <Loader />
            ) : (
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
            )}
          </div>
        </form>
      </div>

      <style jsx>{`
        .chat-window {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 20px;
          overflow-y: auto;
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
  );
}

export default ChatComponent;

/* <div className="flex flex-col flex-1 overflow-y-auto">
     <div className=" self-end p-4">
        <div className="bg-[#5D34F3] mb-10 px-4 py-2.5 rounded-t-2xl rounded-l-2xl rounded-r-md mr-10 md:mr-14">
          <span className="text-xs">AI: </span>
          <span className="text-xs font-normal">
            That is Lumina Syndrome is a fictional illness Lorem ipsum dolor sit
            amet consectetur. Imperdiet non sit suspendisse velit tellus nibh.
            Odio morbi odio sagittis a purus sollicitudin mauris. Orci at
            viverra feugiat odio viverra. Lectus feugiat se
          </span>
        </div>

        {messages.map((message, index) => (
          <div
            key={index}
            className="bg-[#4E5AC3]/15 mb-10 px-4 py-2.5 rounded-t-2xl rounded-l-2xl rounded-r-md ml-10 md:ml-14"
          >
            <span className="text-xs">{message.sender}: </span>
            <span className="text-xs font-normal">{message.text}</span>
          </div>
        ))}
      </div>
     </div>
      <form onSubmit={handleMessageSubmit} className="mt-auto">
       <div className="flex flex-row justify-between items-center m-4 p-4 bg-[#F4F4F4] rounded-lg">
       <input
          type="text"
          value={newMessage}
          onChange={handleMessageChange}
          placeholder="Type a message..."
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
      </form>*/
