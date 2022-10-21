import React from "react";

export default function About(props) {
  return (
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2 >About Us</h2>
        <div className="accordion  container my-4" id="accordionExample">
         <div className="accordion-item" style={{color: props.mode==='dark'?'white':'black', border:"1px solid black", backgroundColor: props.mode === 'light'?'white':'#264257' }}>
            <div className="accordion-body" >
              <strong>Text Play</strong> is an online text analysis tool that generates statistics about your text. This analysis tool provides instant results for number of words and character in text, helps with chnaging text to upper\lower case, copy the text and other functionalities.  <code></code>
            </div>
          </div>
      </div>
    </div>
    
  );
}
