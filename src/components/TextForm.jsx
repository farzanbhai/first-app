import { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const wordCount = text.trim().split(/\s+/).filter(word => word !== "").length;

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase", "success")
  };

  const handleDownClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase", "success")
  };

  const handleClear = () => {
    setText("");
    props.showAlert("All text is removed", "success")
  };

  const handleBold = () => {
    setIsBold(!isBold); // Toggle bold state
    props.showAlert("Converted to Bold", "success")
  };

  const handleItalic = () => {
    setIsItalic(!isItalic); // Toggle italic state
    props.showAlert("Converted to Italic", "success")
  };

  const handleExtraSpace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("All spaces removed", "success")
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  return (
    <>
      <div
         className="container my-2 my-2"
        style={{ color: props.mode === "dark" ? "White" : "black" }}
      >
        <div  className="mb-3">
          <label htmlFor="exampleFormControlInput1"  className="form-label">
            <h5>{props.email}</h5>
          </label>
          <input
            type="email"
             className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            style={{
              color: props.mode === "dark" ? "white" : "grey",
              backgroundColor: props.mode === "dark" ? "#565656" : "white",
            }}
          />
        </div>
        <h1>{props.heading}</h1>
        <div  className="mb-3">
          <textarea
             className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            style={{
              color: props.mode === "dark" ? "white" : "grey",
              outlineColor: "black",
              backgroundColor: props.mode === "dark" ? "#565656" : "white",
              fontWeight: isBold ? "bold" : "normal", // Apply bold styling based on isBold
              fontStyle: isItalic ? "italic" : "normal",
            }} // Apply bold styling based on isItalian
            rows="5"
          ></textarea>
        </div>
        <div  className="container my-3">
          <h1> Summary of your text</h1>
          <p>
            <b>Words count:</b> {wordCount} ||
            <b> Letters count:</b> {text.length} ||
            <b> Normal time to read this text:</b>{" "}
            {0.008 * text.split(" ").length}
          </p>
        </div>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          convert To Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>
          convert To Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>
          Clear
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleBold}>
          Bold
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleItalic}>
          Italic
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
  mode: PropTypes.any,
  email: PropTypes.email,
  showAlert: PropTypes.any
};

// TextForm.defaultProps = {
//   heading: 'hussssh phurrrr',
// }
