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
  const [bubbleQty, setBubbleQty] = useState(25);
  const [bubbleColors, setBubbleColors] = useState([]);
  const [bubbleDirection, setBubbleDirection] = useState('reverse');
  const [bubbleRadius, setBubbleRadius] = useState(Math.round(16 + 64 * Math.random()));
  const [bubbleSpeed, setBubbleSpeed] = useState(+(10 + 2 * Math.random()).toFixed(2));

  const [dayTime, setDayTime] = useState('');

  var startHour = new Date().getHours();
  var startMinute = new Date().getMinutes();
  var startSecond = new Date().getSeconds();


  var activeHour = startHour;
  var activeMinute = startMinute;
  var activeSecond = startSecond;


    setInterval(() => {
      activeSecond++;
      if (activeSecond === 60) {
        activeSecond = 1;
        activeMinute++;
      }
      if (activeMinute === 60) {
        activeMinute = 1;
        activeHour++;
      }
      if (activeHour === 24) {
        activeHour = 0;
      }
      document.getElementById('footerTime').innerText = `${activeHour}:${activeMinute}:${activeSecond}`;
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
          // const weather = 'Rain';

          const detailedWeather = (await response.data.weather.description).charAt(0).toUpperCase() + (await response.data.weather.description).slice(1);

          document.getElementById('footerWeather').innerText = "Weather: " + detailedWeather;

          const bodyBackground = document.querySelector('body');
          const currentHour = new Date().getHours();
          // const currentHour = 21;


            if (currentHour >= 20) {
            bodyBackground.style.backgroundColor = 'hsla(0, 0%, 17%, 1)';
            setDayTime('Night');
            } else if (currentHour >= 16 && currentHour < 20) {
            bodyBackground.style.backgroundColor = 'hsla(1, 0%, 39%, 1)';
            setDayTime('Evening');
            } else if (currentHour >= 0 && currentHour < 16) {
            bodyBackground.style.backgroundColor = '#CED3DC';
            setDayTime('Day');
            } else {
            console.error('Error setting background color');
            }
    
          if (weather === 'Clear' || weather === 'Clouds') {
            setBubbleQty(25);
            setBubbleRadius(Math.round(12 + 64 * Math.random()));
            setBubbleColors(['#69a297C4', '#e2856eC4', '#e2856e', '#69a297']);

          } else if (weather === 'Rain') {
            setBubbleDirection('normal');
            setBubbleRadius(10);
            setBubbleSpeed(+(1 + 2 * Math.random()).toFixed(2));
            setBubbleColors(['rgba(101, 93, 217, 0.6)']);

          } else if (weather === 'Snow' || weather === 'Hail') {
            setBubbleQty(500);
            setBubbleDirection('normal');
            setBubbleRadius(5);
            setBubbleColors(['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']);

          } else if (weather === 'Thunderstorm') {
            setBubbleColors(['#ffff00', '#ffff00', '#ffff00', '#ffff00', '#ffff00']);

          } else if (weather === 'Fog') {
            setBubbleColors(['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']);

          } else if (weather === 'Mist') {
            setBubbleColors(['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']);
          } 
        }
    
        getWeather();
      }, [])
  
  useEffect(() => {
      if ( bubbleColors.length === 0 ) {
        return;
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
              let x = Math.round(100 * Math.random());
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
