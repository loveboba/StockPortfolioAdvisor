import JSONbox from "./JSONbox";
import Message from "./Message";
import Graph from "./Graph";

function FileUploadPage() {
  return (
    <div className="fileUploadPage">
      <Message></Message>
      <JSONbox></JSONbox>
      {/* <Graph></Graph> */}
    </div>
  );
}

export default FileUploadPage;
