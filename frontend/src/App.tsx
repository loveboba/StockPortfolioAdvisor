// import the test message component
import Message from "./components/Message";
// import JSON Box
import JSONbox from "./components/JSONbox";

function App() {
  return (
    <div>
      <h1>Stock Portfolio</h1>
      <h2>Hello. This is Shreya's personal application.</h2>
      <div>
        <Message></Message>
        <JSONbox></JSONbox>
      </div>
    </div>
  );
}

export default App;
