import React from "react";
import PatientNavbar from "../components/patients-components/PatientNavbar";


function MessagePage() {
  return (
    <div className="h-full flex m-0 p-0">
      <PatientNavbar/>
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
      <div className="chat-window">
        {/* Chat messages */}
        <div className="message incoming">Incoming Message</div>
        <div className="message outgoing">Outgoing Message</div>
        {/* Add more messages as needed */}
        <div className="message-input">
          {/* Input area for typing messages */}
          <input type="text" placeholder="Type your message here" />
          <button>Send</button>
        </div>
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
            padding: 20px;
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

          .message-input input {
            flex: 1;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          .message-input button {
            margin-left: 10px;
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .message-input button:hover {
            background-color: #0056b3;
          }
        `}</style>
    </div>
    </div>
  );
}

export default MessagePage;
