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

  const createNotification = (message, type) => {
    notify(message, type);
  }

  // Bubble data

  let baseBubbleQty = 25;
  let baseBubbleDirection = 'reverse';
  let baseBubbleRadius = Math.round(16 + 64 * Math.random());
  let baseBubbleSpeed = +(10 + 2 * Math.random()).toFixed(2);


  const [bubbleQty, setBubbleQty] = useState(baseBubbleQty);
  const [bubbleColors, setBubbleColors] = useState([]);
  const [bubbleDirection, setBubbleDirection] = useState(baseBubbleDirection);
  const [bubbleRadius, setBubbleRadius] = useState(baseBubbleRadius);
  const [bubbleSpeed, setBubbleSpeed] = useState(baseBubbleSpeed);


  const [dayTime, setDayTime] = useState('');

  // Set time
  var startHour = new Date().getHours();
  var cutHour = startHour % 12;
  var startMinute = new Date().getMinutes();
  var startSecond = new Date().getSeconds();
  var activeHour = startHour;
  var activeMinute = startMinute;
  var activeSecond = startSecond;
  var amPm = startHour >= 12 ? 'PM' : 'AM';

  
    setInterval(() => {
      activeSecond++;
      if (activeSecond > 60) {
        activeSecond = 1;
        activeMinute++;
      }
      if (activeMinute === 60) {
        activeMinute = 0;
        activeHour++;
      }
      if (activeHour > 24) {
        activeHour = 1;
      }
      if (activeSecond > 0 && activeSecond < 10) {
        activeSecond = `0${activeSecond}`;
      } if (activeMinute >= 0 && activeMinute < 10) {
        activeMinute = activeMinute.toString().padStart(2, '0');
      }
      document.getElementById('footerTime').innerText = `${cutHour}:${activeMinute}:${activeSecond} ${amPm}`;
    }, 1000);



// Pull weather data, set bubble to match
  useEffect(() => {
    axios.get('https://j9dund2fhk.execute-api.us-west-1.amazonaws.com/main/weather/')
      .then((response) => {
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
      }, []);

      useEffect(() => {
        const getWeather = async () => {
          const response = await axios.get('https://j9dund2fhk.execute-api.us-west-1.amazonaws.com/main/weather');
          const weather = await response.data.weather.main;

          // const weather = 'Clear';

          const sunsetBg = 'linear-gradient(0deg, rgba(225,119,119,1) 0%, rgba(228,184,101,1) 29%, rgba(245,229,95,1) 62%, rgba(142,142,142,1) 100%)';

          const detailedWeather = (await response.data.weather.description).charAt(0).toUpperCase() + (await response.data.weather.description).slice(1);

          document.getElementById('footerWeather').innerText = "Weather: " + detailedWeather;

          const bodyBackground = document.querySelector('body');
          const currentHour = new Date().getHours();
          // const currentHour = 8;

            if (currentHour >= 20) {
            bodyBackground.style.backgroundColor = 'hsla(0, 0%, 17%, 1)';
            setDayTime('Night');
            } else if (currentHour >= 17 && currentHour < 20) {
            bodyBackground.style.backgroundColor = '#b08431';
            setDayTime('Evening');
            } else if (currentHour >= 12 && currentHour < 17 ) {
              bodyBackground.style.backgroundColor = ('#5B618A');
              setDayTime('Afternoon')
              console.log(currentHour);
            } else if (currentHour >= 5 && currentHour < 12) {
            bodyBackground.style.background = sunsetBg;
            console.log(sunsetBg);
            setDayTime('Morning');
            } else if (currentHour >= 0 && currentHour < 5) {
              bodyBackground.style.backgroundColor = 'hsla(0, 0%, 17%, 1)'
              setDayTime('Dawn');
            }
             else {
              bodyBackground.style.background = 'black';
            console.error('Error setting background color');
            }
    
          if (weather === 'Clear' || weather === 'Clouds') {
            setBubbleQty(baseBubbleQty);
            setBubbleDirection(baseBubbleDirection);
            setBubbleRadius(baseBubbleRadius);
            setBubbleSpeed(baseBubbleSpeed);
            setBubbleColors(['#69a297C4', '#e2856eC4', '#e2856e', '#69a297']);

          } else if (weather === 'Rain') {
            setBubbleQty(100);
            setBubbleDirection('normal');
            setBubbleRadius(10);
            setBubbleSpeed(+(1 + 2 * Math.random()).toFixed(2));
            setBubbleColors(['rgba(101, 93, 217, 0.6)']);

          } else if (weather === 'Snow' || weather === 'Hail') {
            setBubbleQty(150);
            setBubbleDirection('normal');
            setBubbleRadius(2 + 10 * Math.random());
            setBubbleSpeed(+(4 + 2 * Math.random()).toFixed(2));
            setBubbleColors(['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']);

          } else if (weather === 'Thunderstorm') {
            setBubbleQty(baseBubbleQty);
            setBubbleDirection(baseBubbleDirection);
            setBubbleRadius(baseBubbleRadius);
            setBubbleSpeed(baseBubbleSpeed);
            setBubbleColors(['#ffff00', '#ffff00', '#ffff00', '#ffff00', '#ffff00']);

          } else if (weather === 'Fog' || weather === 'Haze') {
            setBubbleQty(baseBubbleQty);
            setBubbleDirection(baseBubbleDirection);
            setBubbleRadius(Math.round(10 + 200 * Math.random()));
            setBubbleSpeed(baseBubbleSpeed);
            setBubbleColors(['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.75)', 'rgba(255, 255, 255, 0.25)', 'rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.15)']);

          } else if (weather === 'Mist') {
            setBubbleQty(baseBubbleQty);
            setBubbleDirection(baseBubbleDirection);
            setBubbleRadius(baseBubbleRadius);
            setBubbleSpeed(baseBubbleSpeed);
            setBubbleColors(['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']);
          } 
        }
    
        getWeather();
      }, [])
  
  useEffect(() => {
      if ( bubbleColors.length === 0 ) {
        return;
      }

      function removeRain() {
        const rainContainer = document.querySelector(".rain")
        if (rainContainer) {
          document.querySelectorAll('.drop').forEach(e => e.remove());
          // rainContainer.innerHTML = "";
        }
      }


      function rain() {
          const rainContainer = document.querySelector(".rain");
        
          if (!rainContainer) {
            console.error("Rain container not found");
            return;
          }
  
          if (rainContainer) {      
            for (let i = 0; i < bubbleQty; i++) {
              let r = bubbleRadius;
              let x = Math.round(100 * Math.random()) - 1;
              let t = bubbleSpeed;
              let dt = +(Math.random() * t).toFixed(2);
          
              const drop = document.createElement("div");
              drop.classList.add("drop");
              drop.style.setProperty('--r', `${r}px`);
              drop.style.setProperty('--x', `${x}%`);
              drop.style.setProperty('--t', `${t}s`);
              drop.style.setProperty('--dt', `-${dt}s`);
              drop.style.setProperty('background-color', bubbleColors[Math.floor(Math.random() * bubbleColors.length)]);
              drop.style.setProperty('animation-direction', bubbleDirection);
  
              rainContainer.appendChild(drop);
            }
      }
      }
      removeRain();
      rain();
  }, [bubbleColors])
  

  return (
  <>
    <main>
        <div className="rain" aria-hidden="true"></div>
    </main>
    
    <ContentArea />
    <div className="noselect">
    <Notification />
    <NavigationBar />

    <div className="footer">
      <div id="socialMedia">
        <Link to="https://www.instagram.com/ok.lub" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </Link>
        <Link to="https://www.github.com/calebgjones" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/klubj" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </Link>
      </div>
    
        <div className="footerData">
          <div id="footerWeather"></div>
          <div id="footerTime"></div>
          <div id="footerDayTime">{dayTime}</div>
        </div>
      </div>

    </div>

  </>
  )
}

export default App;
