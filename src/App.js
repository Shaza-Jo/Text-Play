import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  function toggleMode() {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#273339";
      showAlert("Dark mode enabled!", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled!", "success");
    }
  }
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <Router>
      <div>
        <Navbar
          title="TextMod"
          aboutText="About Us"
          mode={mode}
          capitalize={capitalize}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} capitalize={capitalize} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About mode={mode}/>}></Route>
            <Route
              exact path="/"
              element={
                <TextArea
                  heading="Enter your text here:"
                  mode={mode}
                  alertType={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
