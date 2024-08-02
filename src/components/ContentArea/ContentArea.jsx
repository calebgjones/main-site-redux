import './ContentArea.css';
import Content from './Content.js';
import { useState } from 'react';
import { useEffect } from 'react';

function ContentArea() {

const [contentHeader, setContentHeader] = useState("loading header...");
const [contentBody, setContentBody] = useState("loading content...");


useEffect(() => {
        setContentHeader([Content[0].header]);
        setContentBody([Content[0].body]);
}, []);

    return (
        <div id="contentContainer">
            {Content.map((item, index) => (
                <div key={index}>
                    <h1 id={item.section} className="contentHeader">{item.header}</h1>
                    <p className="contentBody">{item.body}</p>
                </div>
            ))}
        </div>
    )
}

export default ContentArea;