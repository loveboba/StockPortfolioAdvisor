import { useState } from "react";

function AskAI() {
  const [message_to_ai, set_message] = useState("");
  const [the_ai_response, set_ai_response] = useState(
    "The AI will respond here",
  );

  const connect_to_backend = async () => {
    const the_response = await fetch("http://127.0.0.1:8000/aichat", {
      method: "POST",
      body: message_to_ai,
    });
    //   .then((the_response) => the_response.json())
    //   .then((the_text) => set_ai_response(the_text))
    //   .catch((error: unknown) => console.error("Error:", error));
    console.log("status", the_response.status);

    const debug = await the_response.json();

    console.log("backend:", debug);

    set_ai_response(debug.ai_response);
  };

  return (
    <div>
      <h2>Hello! Ask the AI assistant about your graphs/stock market.</h2>
      <input
        value={message_to_ai}
        onChange={(the_event) => set_message(the_event.target.value)}
        placeholder="Write your message to AI assistant."
      ></input>
      <button onClick={connect_to_backend}> Send the Message </button>
      <p>{the_ai_response}</p>
    </div>
  );
}

export default AskAI;
