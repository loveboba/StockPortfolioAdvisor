import JSONbox from "./JSONbox";
import Message from "./Message";
import Graph from "./Graph";
import AskAI from "./AskAI";

function FileUploadPage() {
  return (
    <div className="fileUploadPage">
      <Message></Message>
      <JSONbox></JSONbox>
      {/* <Graph></Graph> */}
      {/* <AskAI></AskAI> */}
    </div>
  );
}

export default FileUploadPage;
