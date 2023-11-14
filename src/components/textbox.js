import React, {useState}from 'react'

export default function (props) {
    const [text,setText] = useState('');

    const capital = () =>
    {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const lowercase = () =>
    {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const clearText = () =>
    {
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
  return (
    <>
    <div className= "container" style ={{color:props.mode === 'light'?'black':'white'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3" >
        <textarea className="form-control" style={{background:props.mode=== 'light'?'white':'black', color:props.mode === 'light'?'black':'white'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button disabled ={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={capital}>Convert to upper case</button>
        <button disabled ={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={lowercase}>Convert to lower case</button>
        <button disabled ={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={clearText}>Clear text</button>
    </div>
    <div className="container " style ={{color:props.mode === 'light'?'black':'white'}}>
        <h3 className='my-2'>Your text summary</h3>
        <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words {text.length} characters</p>
        <p> {text.split(".").filter((element)=> {return element.length!=0}).length} Total Lines</p>
        <h3 className='my-2'>Preview</h3>
        <p>{text}</p>
    </div>
    
    </>
  )
   
}
