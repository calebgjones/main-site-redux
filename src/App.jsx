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
  const [bubbleRadius, setBubbleRadius] = useState(Math.round(1 + 64 * Math.random()));
  const [bubbleSpeed, setBubbleSpeed] = useState(+(10 + 2 * Math.random()).toFixed(2));

// Pull weather data, set bubble to match
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

      useEffect(() => {
        const getWeather = async () => {
          const response = await axios.get('https://j9dund2fhk.execute-api.us-west-1.amazonaws.com/main/weather');
          // const weather = await response.data.weather[0].main;
          const weather = 'Clouds'
    
          console.log(await weather);
    
          if (weather === 'Clear' || weather === 'Clouds') {
            setBubbleQty(25);
            setBubbleRadius(Math.round(12 + 64 * Math.random()));
            setBubbleColors(['#69a297C4', '#e2856eC4', '#e2856e', '#69a297']);
          } else if (weather === 'Rain') {
            setBubbleDirection('normal');
            setBubbleRadius(10);
            setBubbleSpeed(+(1 + 2 * Math.random()).toFixed(2));
            setBubbleColors(['#655dd9']);
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
