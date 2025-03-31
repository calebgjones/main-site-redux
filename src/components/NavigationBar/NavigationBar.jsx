import '/src/fonts.css';
import './NavigationBar.css';
import About from '../About/About';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { DateDiff } from '../Utilities/DateDiff';

function NavigationBar() {

  const dt1 = new Date("2000-09-15"); //Birth date
  const dt2 = new Date(); //Current date
  // const dt2 = new Date("2024-10-16"); //Current date

  const [titleSmiley, setTitleSmiley] = useState(':)');
  const smileys = [':)', ':D', ':P', ':O'];

  function changeSmiley() {
    setTitleSmiley(smileys[Math.floor(Math.random() * smileys.length)]);
  }

  
  useEffect(() => {
    const interval = setInterval(changeSmiley, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="noselect" id="navContainer">
      <div className="titleContainer">
        <div id="navTitle">Caleb Jones</div>
        <div id="navBirthday">{DateDiff(dt2, dt1)}</div>
        <div id="titleSmiley"><smileyContent>{titleSmiley}</smileyContent></div>
      </div>
      <a href='https://www.calebdagoat.com/'><div id="goatedLink">Goated.</div></a>
      <div id="navBackground"></div>
      <nav>
        <ul>
          <a id="navOuter" onClick={e => {
            e.preventDefault();
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
          }}><li>Home</li></a>
          <a id="navInner" onClick={e => {
            e.preventDefault();
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
          }}><li>About</li></a>
          <a id="navInner" onClick={e => {
            e.preventDefault();
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
          }}><li>Projects</li></a>
          <a id="navOuter" onClick={e => {
            e.preventDefault();
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
          }}><li>Contact</li></a>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;