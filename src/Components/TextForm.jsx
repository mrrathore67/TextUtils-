import React, {useState} from "react";


export default function TextForm(props) {

    const handleUpperCase = () => {
        // console.log('uppercase clicked'); 
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(': '+'All text has been converted into UpperCase', 'success')
    }
    const handleLowerCase = () => {
        // console.log('lower case clicked'); 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(': '+'All text has been converted into LowerCase', 'success')
    }
    const copyText = () => {
        let textValue = document.getElementById('myBox').value.trim();
        if(textValue.length > 0){
            navigator.clipboard.writeText(text)
            // .then(() => {
            //     alert('Text has been Copied!')
            // })
            // .catch(() => {
            //     alert('Got and error:')
            // })
            alert('Your text has been Copied!')
        }else{
            alert('Textarea is empty, please enter youu text')
        }
        

    }
    
    const clearAll = () => {
        let newText = ''
        setText(newText)
        props.showAlert(': '+'All text has been cleared', 'success')
    }
    const removeExtraSpaces = () => {
        let newText = text.trim().split(/[ ]+/).join(' ');
        setText(newText)
        props.showAlert(': '+'Extra spaces ahev been removed', 'success')
    }
    const handleOnChange = (e) => {
        // console.log('uppercase clicked'); 
        setText(e.target.value)
    }
    const countVowels = (str) => {
        const vowels = str.match(/[aeiouAEIOU]/g);
        return vowels ? vowels.length : 0;
    }
    const countConsonent = (str) => {
        const consonent = str.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g);
        return consonent ? consonent.length : 0;
    }
    const [text, setText] = useState('');

  return(
    <>
    <div className="container">
        <h1 className={`text-${props.mode === 'light'? 'dark': 'light'}`}>{props.heading}</h1>
         <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'? 'white': 'black', color: props.mode ==='light'? 'black': 'white'}}  id="myBox" rows="8"></textarea>
            <button disabled={text.length === 0} type="button" className="btn btn-primary mt-2"
                onClick={handleUpperCase}>Convert To UpperCase</button>
            <button disabled={text.length === 0} type="button" className="btn btn-secondary mt-2 ms-2"
                onClick={handleLowerCase}>Conver To Lower Case</button>
            <button disabled={text.length === 0} type="button" className="btn btn-danger mt-2 ms-2"
                onClick={clearAll}>Clear All Text</button>
            <button disabled={text.length === 0} type="button" className="btn btn-info mt-2 ms-2"
                onClick={copyText}>Copy All Text</button>
            <button disabled={text.length === 0} type="button" className="btn btn-dark mt-2 ms-2"
                onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        </div>
    </div>
    <div className="container">
        <h1 className={`text-${props.mode === 'light'? 'dark': 'light'}`}>Summary of words</h1>
        <p className={`text-${props.mode === 'light'? 'dark': 'light'}`}>{text.trim() === "" ? 0 : text.trim().split(' ').length} words and {text.length} characters with space.</p>
        <p className={`text-${props.mode === 'light'? 'dark': 'light'}`}>{0.008 * (text.trim() === "" ? 0 : text.trim().split(' ').length)} Minutes to read all.</p>
        <h3 className={`text-${props.mode === 'light'? 'dark': 'light'}`}>Preview</h3>
        <p className={`text-${props.mode === 'light'? 'dark': 'light'}`}>{text.length > 0 ? text: 'Nothing to preview...!'}</p>
    </div>
    <div className="container">
        <h2 className={`text-${props.mode === 'light'? 'dark': 'light'}`}>Vowel and Consonant</h2>
        <p className={`text-${props.mode === 'light'? 'dark': 'light'}`}>{countVowels(text)} vowels and {countConsonent(text)} consonants.</p>
    </div>
    </>
    
  );
}
