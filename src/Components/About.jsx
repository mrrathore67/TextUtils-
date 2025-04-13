import React,{useState} from "react";

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({color: 'black', backgroundColor: 'white'});

    // const [btnText, setBtnText] = useState("Enable Dark Mode");
    // const toggleStyle = () => {
    //     if(myStyle.color == 'black'){
    //         setMyStyle({color: 'white', backgroundColor: 'black'})
    //         setBtnText('Enable Light Mode')
    //     }else{
    //         setMyStyle({color: 'black', backgroundColor: 'white'})
    //         setBtnText('Enable Dark Mode')
    //     }
    // }
    
    let myStyle ={
        color: props.mode === 'light' ? 'black' : 'white',
        backgroundColor: props.mode === 'light' ? 'white' : 'rgb(36 74 104)',
        // border: props.mode === "dark" ? '1px solid white' : "1px solid black"
    }
    let forAbout = {
        color: props.mode === 'light' ? 'black' : 'white',
        backgroundColor: props.mode === 'light' ? 'white' : '#042743',
    }

  return( 
    <div className="container ">
        <div style={forAbout} className="container accordion" id="accordionExample" >
        <h1>About us</h1>
            <div  style={myStyle} className="accordion-item">
                <h2 className="accordion-header">
                <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyxe Your Text</strong>
                </button>
                </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div style={myStyle} className="accordion-body">
                Textutils gives you a way to analyze your text quickly efficiently. Be it count, character count or many other things.
             </div>
        </div>
        </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to Use</strong>
                </button>
                </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div style={myStyle} className="accordion-body">
                TextUtils is a free character counter tool that provides instant character count & word count statistics for a given
                text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character
                limit.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button style={myStyle} className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong> 
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div style={myStyle} className="accordion-body ">
                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It
                suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
            </div>
        </div>
        {/* <button  type="button" className="btn btn-primary mt-2 mb-2"
                onClick={toggleStyle}>{btnText}</button> */}
        </div>
       
    </div>
  );
}
