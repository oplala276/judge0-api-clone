import React from 'react'
// import axios from 'axios'
import "./App.css";
import image from "./judge0_icon.png"
export default function SubmissionForm() {
    return (
        <div className='container1'>
            <form id="myform" name="myform" method="post" action="http://localhost:8080/compilecode">
                <div className="header">
                    <div id="headingtop">
                        <h2>Judge0</h2>
                        <img src={image} alt="images" style={{
                            height: '30px',
                            marginTop: '7px'
                        }} />
                    </div>
                    <div className='bar'>
                        <input id='run' type="submit" name="submit" value="Run" />
                        Language: <select name="lang">
                            <option value="C">C</option>
                            <option value="C++">C++</option>
                            <option value="Java">Java</option>
                            <option value="Python">Python</option>
                        </select>
                        Need Input: <input type="radio" name="inputRadio" value="true" />yes
                        <input type="radio" name="inputRadio" value="false" />No
                    </div>
                </div>
                <br />
                <h3 id='codehead'>code</h3>
                <textarea name="code" id="code" cols="175" rows="50"></textarea>
                <br />
                <h3 id='inputhead'>Input</h3>
                <textarea name="input" id="input" cols="175" rows="8"></textarea>
            </form>
        </div >
    )
}
