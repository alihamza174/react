import React, {useState} from 'react'

export default function TextForm(props) {
  const convetToUpper = ()=>{
    var newText = text.toUpperCase()
    setText(newText)
  }
  const changeHandle = (event)=>{
    console.log("on change")
    setText(event.target.value)
  }
  const [text, setText] = useState('Enter text here');
 // setText("value updated")
  return (
    <div>
      <div className="m-5">
        <h1>{props.heading}</h1>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="8" onChange={changeHandle}></textarea>
      </div>
      
    </div>
  )
}
