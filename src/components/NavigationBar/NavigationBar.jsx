import '/src/fonts.css';
import './NavigationBar.css';
import About from '../About/About';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function NavigationBar() {

  const dt1 = new Date("2000-09-15"); //Birth date
  const dt2 = new Date(); //Current date
  // const dt2 = new Date("2024-10-16"); //Current date

  const [titleSmiley, setTitleSmiley] = useState(':)');
  const smileys = [':)', ':D', ':P', ':O'];

  function changeSmiley() {
    setTitleSmiley(smileys[Math.floor(Math.random() * smileys.length)]);
  }

  function dateDiff(dt2, dt1) {
      const diffTime = Math.abs(dt2 - dt1);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      
      let years = Math.floor(diffDays / 365.25);
      let remainingDays = diffDays % 365.25;
      let months = Math.floor(remainingDays / 30);
      remainingDays = Math.floor(remainingDays % 30);
      if (months === 12) {
        months = 0;
        years += 1;}

    if (isNaN(months) && isNaN(remainingDays) && isNaN(years)) {
      return ''; 
    } else if (months === 0 && remainingDays === 0) {
      return 'It\'s my birthday, I\'m ' + years + '!';
    } else if (months === 0) {
      if (remainingDays > 1) {
      return `${years} years and ${remainingDays} days old!`;
      } else if (remainingDays === 1) {
        return `${years} years and ${remainingDays} day old!`;
      }
    } else if (remainingDays === 0) {
      return `${years} years and ${months} months old!`;
    }else {
      if (remainingDays > 1) {
        return `${years} years, ${months} months, and ${remainingDays} days old!`;
        } else if (remainingDays === 1) {
          return `${years} years, ${months} months, and ${remainingDays} day old!`;
        }
    }
  }
  
  useEffect(() => {
    const interval = setInterval(changeSmiley, 5000);
    return () => clearInterval(interval);
  }, []);

  return (

    <div className="noselect" id="navContainer">
        <div className="titleContainer">
          <div id="navTitle">Caleb Jones</div>
          <div id="navBirthday">{dateDiff(dt2, dt1)}</div>
          <div id="titleSmiley"><smileyContent>{titleSmiley}</smileyContent></div>
      </div>
      <a href='https://www.calebdagoat.com/'><div id="goatedLink">Goated.</div></a>
        <div id="navBackground"></div>
      <nav>
        <ul>
            <Link id="navOuter" to="/"><li>Home</li></Link>
            <Link id="navInner" to="#about"><li>About</li></Link>
            <Link id="navInner" to="#projects"><li>Projects</li></Link>
            <Link id="navOuter" to="#contact"><li>Contact</li></Link>

          {/* <Routes> 
            <Route id="navOuter" to="../ContentArea/ContentArea.jsx">Home</Route>
            <Route id="navInner" to="">About</Route>
            <Route id="navInner" to="">Projects</Route>
            <Route id="navOuter" to="">Contact</Route>
          </Routes> */}
        </ul>
        
      </nav>

    </div>
  );
}

export default NavigationBar;