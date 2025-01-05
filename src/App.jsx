// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import BtnColor from "./components/BtnColor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// let name = "Batman";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Active Now:", "success");
      document.title = "Batman - Home";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#454545";
      showAlert("Dark Mode is Active Now:", "success");
      setInterval(() => {
        document.title = "Batman - Home | DarkMode";
      }, 2000);
      setInterval(() => {
        document.title = "Install Batman";
      }, 1500);
    }
  };

  const [bgColor, setBgColor] = useState("White");

  const press = (color) => {
    setBgColor(color);
  };

  return (
    <>
      <Router>
        <Navbar
          title="BATMAN"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/about"
            element={<About mode={mode} press={press} bgColor={bgColor} />}
          />
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Write text here"
                email="Enter Email Address"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
        <BtnColor press={press} bgColor={bgColor} />
      </Router>
    </>
  );
}

export default App;
