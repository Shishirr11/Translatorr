import React,{useState} from 'react'

export default function TextForm(props) {
    const up=()=>{
        // console.log("clicked uppercase button")
        let s=text.toUpperCase();
        setText(s)
    }
    const low=()=>{
        let s=text.toLowerCase();
        setText(s)
    }
    const erase=()=>{
        let s='';
        setText(s)
    }
    const onchange=(event)=>{
        setText(event.target.value)
    }
    const[text,setText]=useState("Enter text here...")
    return (
        <>
        <div className="container">
            <h2>{props.title}</h2>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={onchange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={up}>convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={low}>convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={erase}>clear</button>
        </div>
        <div className="container my-3">
            <h2>Text summary:</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h3>preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
