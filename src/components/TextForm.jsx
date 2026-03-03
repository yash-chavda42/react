import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  
   const handleOnChange = (event)=>{
    setText(event.target.value)
  }



  const [text, setText] = useState('hii');
  
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea className="form-control" id="myBox" rows={8} value={text} onChange={handleOnChange}/>
        </div>
        <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
      </div>
      <div className="container my-3">
        <h1>your text summry</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
    </>
)
}
