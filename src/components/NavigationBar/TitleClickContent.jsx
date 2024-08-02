import './NavigationBar';
import './NavigationBar.css';
import { useState, useEffect } from 'react';

function titleClickContent() {

    return (
        <div id="titleClickContainer">
            <img src="https://via.placeholder.com/300" alt="placeholder image" style={clickDisplay}/>
        </div>
    )
}

export default titleClickContent;  