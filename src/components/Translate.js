import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'
//GOOGLE API KEY AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
function Translate() {
    const options = [
        {
            label: 'Afirkaans',
            value: 'af'
        },
        {
            label: 'Arabic',
            value: 'ar'
        },
        {
            label: 'Hindi',
            value: 'hi'
        }
    ]
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState(' ') //input
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text:</label>
                    <input value={text} onChange={(e) => setText(e.target.value)}></input>
                </div>
            </div>
            <Dropdown
                label="Select a Language"
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <h3 className="ui header">Output</h3>
            <Convert language={language} text={text}/>
        </div>
    )
}
export default Translate
