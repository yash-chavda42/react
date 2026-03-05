import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase", "success")
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase", "success")
  }
  
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

  const [text, setText] = useState('');
  
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white':'#343a40'}}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea className="form-control" id="myBox" rows={8} value={text} onChange={handleOnChange} 
                    style={{backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : '#343a40'}}/>
        </div>
        <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark' ? 'white':'#343a40'}}>
        <h1>your text summry</h1>
        <p>{text.split(" ").filter(Boolean).length} words and {text.length} characters</p>
        <h2>preview</h2>
        <p>{text.length > 0 ? text :"Enter Somthing To Preview it"}</p>
      </div>
    </>
)
}
