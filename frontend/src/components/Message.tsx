import { useEffect, useState } from "react";

function Message() {
  // get message from the backend

  // define message variable
  // let the_message = "dfgg";
  const [the_message, set_message_for_user] = useState(
    "Haven't called backend yet.",
  );

  useEffect(() => {
    fetch("http://127.0.0.1:8000/test")
      .then((ResponseObject) => ResponseObject.json())
      .then((theJSON) => {
        console.log("the backend:", theJSON);
        set_message_for_user(theJSON.test_message);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);
  return the_message;
}

export default Message;
