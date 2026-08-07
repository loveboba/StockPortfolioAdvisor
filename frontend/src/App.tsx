// import Navigation Bar
import NavigationBar from "./components/NavigationBar";
// import Browser Router, for nav bar
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StockNewsletterPage from "./components/StockNewsletterPage";
import HomePage from "./components/HomePage";
import FileUploadPage from "./components/FileUploadPage";
import ManualUploadPage from "./components/ManualUploadPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "teal",
            alignItems: "center",
            gap: "40px",
          }} // fix the styling of the page and move to correct place
        >
          <NavigationBar></NavigationBar>
          {/* <Message></Message>
          <JSONbox></JSONbox> */}
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route
              path="/stockNewsletter"
              element={<StockNewsletterPage></StockNewsletterPage>}
            ></Route>
            <Route
              path="/fileUpload"
              element={<FileUploadPage></FileUploadPage>}
            ></Route>
            <Route
              path="/manualUpload"
              element={<ManualUploadPage></ManualUploadPage>}
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
