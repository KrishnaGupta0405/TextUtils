// rfc- shortcut
import React,{useState} from "react";

// https://legacy.reactjs.org/docs/hooks-intro.html

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked " + text)
        let newText= text.toUpperCase()
        setText(newText)
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase()
        setText(newText)
    }
    const handleOnChange=(event)=>{
        // onChange event gives a event object
        // console.log("On Change")
        setText(event.target.value);
        // this event.target.value will alow to update the value
    }
    // is says whatever is enter will be strred in text vaiable and when update is done, it will be done through setText function
    const [text,setText] = useState('');
    // inside use state we are not passing anything it means we are no string
     // Declare a new state variable, which we'll call "text"
    // text="fsfsfs" // wrong way to change the state
    // setTtext("fdffdfd");// right way to change the state 
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="className">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
        {/* onchange event basically halp to wrtie in the text area on also whenever someone tyoe it is also updated to setTtext as writtern above */}
      </div>
      <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
      {/* button.btn.btn-primary */}
    </div>
    <div className="container my-4">
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} mintues read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}
