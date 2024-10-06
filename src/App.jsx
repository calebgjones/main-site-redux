import { useState } from 'react'
import NavigationBar from './components/NavigationBar/NavigationBar.jsx';
import ContentArea from './components/ContentArea/ContentArea.jsx';
import Notification, { notify } from './components/Notifications.jsx';
import '/src/index.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './components/Rain/rain.css';

function App() {
  const createNotification = (message, type) => {
    notify(message, type);
  }

  const bubbleColors = ['#69A297', 'hwb(12 43% 11% / 0.5', '#E2856E', 'hwb(168 41% 36% / 0.5)']
  // const bubbleColors = ['rgba(108, 108, 108, 0.527)']
  // const bubbleColors = ['white'];

  useEffect(() => {
    function rain() {
        const rainContainer = document.querySelector(".rain");
      
        if (!rainContainer) {
          console.error("Rain container not found");
          return;
        }

        if (rainContainer) {      
          for (let i = 0; i < 25; i++) {
            let r = Math.round(16 + 64 * Math.random());
            // let r = 10; // Small raindrops
            let x = Math.round(100 * Math.random());
            let t = +(10 + 2 * Math.random()).toFixed(2);
            let dt = +(Math.random() * t).toFixed(2);
        
            const drop = document.createElement("div");
            drop.classList.add("drop");
            drop.style.setProperty('--r', `${r}px`);
            drop.style.setProperty('--x', `${x}%`);
            drop.style.setProperty('--t', `${t}s`);
            drop.style.setProperty('--dt', `-${dt}s`);
            drop.style.setProperty('background-color', bubbleColors[Math.floor(Math.random() * bubbleColors.length)]);
            
            rainContainer.appendChild(drop);
          }
    }
    }

    rain();
}, []);

  return (
    <>
      <main>
          <div className="rain" aria-hidden="true"></div>
      </main>
      <Notification />
      <NavigationBar />
      <ContentArea />

    <div className="footer">
      <div id="socialMedia">
        <Link to="https://www.instagram.com/ok.lub" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </Link>
        <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </Link>
      </div>
    </div>

    </>
  )
}

export default App;
