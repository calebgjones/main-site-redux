import '../../assets/fonts/fonts.css';
import './NavigationBar.css';
import { useState, useEffect } from 'react';

function NavigationBar() {

  const [titleFont, setTitleFont] = useState("kbdunktank");


  function setRandomTitleFont() {
    const fonts = ["kbdunktank", "kbgoogleyeyes", "kbluckyclover", "kbplanetearth", "kbwhenpigsfly", "kbwitchinghour"];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    setTitleFont(randomFont);
    document.getElementById("titleContent").style.fontFamily = randomFont;
  }

  useEffect(() => {
    const interval = setInterval(setRandomTitleFont, 1000);
    return () => clearInterval(interval);
  }, []);
  const caleb = ["C", "a", "l", "e", "b", "!"];

  return (
    <div id="navContainer">
      <a>
        <div id="navBackground">
          {[caleb].map((char, index) => (
            <h1
              key={index}
              id="titleContent"
              {...caleb.map((char, index) => (
                <h1
                  key={index}
                  id={`titleContent-${index}`}
                  style={{ fontFamily: titleFont }}
                >
                  {char}
                </h1>
              ))}
            >
              {char}
            </h1>
          ))}
        </div>
      </a>
      <nav>
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#gallery"><li>Gallery</li></a>
          <a href="#portfolio"><li>Portfolio</li></a>
          <a href="#about"><li>About</li></a>
          <a href="#contact"><li>Contact</li></a>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;