import '/src/fonts.css';
import './NavigationBar.css';
import { useState, useEffect } from 'react';

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
    console.log(remainingDays);
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
      </div>
      <div id="titleSmiley" onClick={changeSmiley}>{titleSmiley}</div>
      <a>
        <div id="navBackground"></div>
      </a>
      <nav>
        <ul>
          <a id="navOuter" href="#"><li>Home</li></a>
          <a id="navInner" href="#about"><li>About</li></a>
          <a id="navInner" href="#projects"><li>Projects</li></a>
          <a id="navOuter" href="#contact"><li>Contact</li></a>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;