import React , {useState} from 'react'

export default function TextArea(props) {

  const handleUpClick = ()=> {
    let newtext = text.toUpperCase()
    setText(newtext)
    props.showalert ("Coverted to UpperCase" , "success")
    // console.log("Click")
  }

  const handleLwClick = ()=> {
    let newtext = text.toLowerCase()
    setText(newtext)
    props.showalert ("Converted to LowerCase" , "success")
  }

  const handleonChange = (event)=> {
    // console.log("On Change Handler")
    setText(event.target.value)
  }

  const clearText = ()=> {
    let newText = ""
    setText(newText)
    props.showalert ("Text Cleared" , "success")
  }

  const handleCopy = ()=> {
    let newText = document.getElementById("myBox")
    newText.select()
    navigator.clipboard.writeText(newText.value)
    props.showalert ("Text Copied to ClipBoard" , "success")
  }

  const removeExtraSpace = ()=> {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showalert ("Extra Spaces Removed" , "success")
    
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
