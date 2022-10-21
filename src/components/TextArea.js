import React, {useState} from "react";
import PropTypes from 'prop-types'

export default function TextArea(props) {
    const [text, setText] = useState("");

     function handleText(event) {
        setText(event.target.value);
    }
    function handleLowClick(event) {
        const newText = text.toLowerCase();
        setText(newText);   
        props.alertType("Converted to lowercase!", "success");
    }
    function handleUpClick(event){
        const newText = text.toUpperCase();
        setText(newText);    
        props.alertType("Converted to Uppercase!", "success");  
    }
    function clearText() {
        setText("");
        props.alertType("Cleared Text!", "success");
    }
    function copyText() {
        navigator.clipboard.writeText(text)
        props.alertType("Copied to clipboard!", "success");
    }

  return (
    <div style={{color: props.mode==='dark'?'white':'black'}}>
      <div className="mb-3 my-3 container" >
        <h2>{props.heading}</h2>
        <textarea style={{color: props.mode==='dark'?'white':'black', backgroundColor: props.mode === 'light'?'white':'#264257', border:"1px solid black" }}
         onChange={handleText}  className="form-control my-3" id="exampleFormControlTextarea1" rows="8" placeholder="Enter text...." value={text} required></textarea>
        <button disabled={text.length===0} type="button" onClick={handleUpClick} className="btn btn-primary my-2 mx-2">TO-UPPERCASE</button>
        <button disabled={text.length===0} type="button" onClick={handleLowClick} className="btn btn-primary my-2 mx-2">to-lowercase</button>
        <button disabled={text.length===0} type="button" onClick={clearText} className="btn btn-primary my-3 mx-2">Clear Text</button>
        <button disabled={text.length===0} type="button" onClick={copyText} className="btn btn-primary my-3 mx-2">Copy Text</button>
      </div>
      <div className="mt-3 container" style= {{height:100}}>
        <h2>Text Summary</h2>
        <p>{text.split(/\s+/).filter(item =>{return item.length !== 0}).length} words and {text.replace(/\s+/g, '').length} characters.</p>
        <h3>Preview</h3>
        <div className="accordion container mt-4" id="accordionExample">
         <div className="accordion-item" style={{color: props.mode==='dark'?'white':'black', border:"1px solid black", backgroundColor: props.mode === 'light'?'white':'rgb(19 42 59)' }}>
            <div className="accordion-body" >
            {text.length>0? text: "Nothing to preview"}
            </div>
          </div>
      </div>
        
      </div>
    </div>
  );
}
TextArea.Prototypes = {heading: PropTypes.string}
TextArea.defaultProps = {
    heading: "heading here"
}