import React , {useState} from 'react'

export default function TextArea(props) {

  const handleUpClick = ()=> {
    let newtext = text.toUpperCase()
    setText(newtext)
    if (text.length>0){

      props.showalert ("Coverted to UpperCase" , "success")
    }
    else {
      props.showalert ("Enter Text To Convert " , "danger")
    }
    // console.log("Click")
  }

  const handleLwClick = ()=> {
    let newtext = text.toLowerCase()
    setText(newtext)
    if (text.length>0) {

      props.showalert ("Converted to LowerCase" , "success")
    }
    else {
      props.showalert ("Enter Text to Convert " , "danger")
    }
  }

  const handleonChange = (event)=> {
    // console.log("On Change Handler")
    setText(event.target.value)
  }

  const clearText = ()=> {
    let newText = ""
    setText(newText)
    if (text.length >0){

      props.showalert ("Text Cleared" , "success")
    }
    else {
      props.showalert ("Please Enter Text !!" , "danger")
    }
  }

  const handleCopy = ()=> {
    let newText = document.getElementById("myBox")
    newText.select()
    navigator.clipboard.writeText(newText.value)
    if (text.length >0) {

      props.showalert ("Text Copied to ClipBoard" , "success")
    }
    else {
      props.showalert ("Please Enter Some Text " , "danger")
    }
  }

  const removeExtraSpace = ()=> {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    if (text.length>0){

      props.showalert ("Extra Spaces Removed" , "success")
    }
    else {
      props.showalert ("Please Enter Some Text First to Remove Spaces" , "danger")
    }

  }

  const [text , setText] = useState("")
  
  return (
    <>
    <div>
      <div className="mb-3 container my-4" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text}  id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} onChange={handleonChange}></textarea>
        <button className="btn btn-primary my-4" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary my-4 mx-2" onClick={handleLwClick}>Convert to LoweCase</button>
        <button className="btn btn-primary my-4 mx-2" onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary my-4 mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary my-4 mx-2" onClick={removeExtraSpace}>Remove Extra Spaces</button>
      </div>
    </div>

    <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something to Preview Here"}</p>

    </div>
    </>
  )
}
