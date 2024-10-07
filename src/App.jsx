import { useState } from 'react'
import NavigationBar from './components/NavigationBar/NavigationBar.jsx';
import ContentArea from './components/ContentArea/ContentArea.jsx';
import Notification, { notify } from './components/Notifications.jsx';
import '/src/index.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './components/Rain/rain.css';
import axios from 'axios';

function App() {

  const [currentWeather, setCurrentWeather] = useState('');
  // var [bubbleColors, setBubbleColors] = useState(['#69A297', 'hwb(12 43% 11% / 0.5', '#E2856E', 'hwb(168 41% 36% / 0.5)']);

  var [bubbleColors, setBubbleColors] = useState('white');
  // var [bubbleRadius, setBubbleRadius] = useState('10');

  useEffect(() => {
    axios.get('https://j9dund2fhk.execute-api.us-west-1.amazonaws.com/main/weather/')
      .then((response) => {
        setCurrentWeather(response.data.weather[0].main);
        // console.log(currentWeather);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
      }, []);

  const createNotification = (message, type) => {
    notify(message, type);
  }

  useEffect(() => {
    function rain() {
        const rainContainer = document.querySelector(".rain");

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
}, [currentWeather]);

  return (
    <>
      <main>
          <div className="rain" aria-hidden="true"></div>
      </main>

      {
         useEffect(() => {
          setTimeout(() => {
            if (currentWeather === "Clear") {
              console.log('clear');
              setBubbleColors('black')
              console.log(document.querySelector('.drop').style);
            } else {
              setBubbleColors(['green'])
            }
          }, 1000);
          } )
      }

      <Notification />
      <NavigationBar />
      <ContentArea />

    <div className="footer">
      <div id="socialMedia">
        <Link to="https://www.instagram.com/ok.lub" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </Link>
        <Link to="https://www.github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
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
