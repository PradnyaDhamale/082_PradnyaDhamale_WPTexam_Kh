import { useState } from "react";
import axios from "axios";

function App() {
  return (
    <div>
      <div className="bg-dark  text-light">
        <span className="h1"> MyChatApp </span>
        <span className="h6"> by Pradnya Dhamale_KH - 082 </span>
      </div>

      <Send />
    </div>
  );
}

export default App;

function Send() {
  const [messages, setChat] = useState("");
  const [list, setlist] = useState("");

  const handleChat = (e) => {
    setChat(e.target.value);
  };

  const send = async () => {
    const url = "localhost:4000/add-messages";
    const data = {
      messages: messages,
    };

    await axios.post(url, data);

    const newList = [data, ...list];
    setlist(newList);
    setChat("");
  };

  const getMessages = async () => {
    const url = "localhost:4000/messages";
    const result = await axios.get(url);

    const list = result.data;
    const newList = [...list];
    setlist(newList);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <input
              className="form-control "
              type="text"
              placeholder="Lets chat here..."
              value={messages}
              onChange={handleChat}
            />
          </div>
          <div className="col-4">
            <input
              className="form-control"
              type="button"
              value="SEND"
              onClick={send}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
