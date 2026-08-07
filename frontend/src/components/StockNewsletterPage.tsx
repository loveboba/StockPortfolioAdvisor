import { useState, useEffect } from "react";

function StockNewsletterPage() {
  const [the_newsletter, set_newsletter] = useState(
    "Haven't gotten the newsletter yet.",
  );

  useEffect(() => {
    fetch("http://127.0.0.1:8000/stockNewsletter")
      .then((ResponseObject) => ResponseObject.json())
      .then((theJSON) => {
        // console.log("the backend:", theJSON);
        set_newsletter(theJSON.the_newsletter);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  return the_newsletter;
}

export default StockNewsletterPage;
