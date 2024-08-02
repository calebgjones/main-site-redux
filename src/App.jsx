import { useState } from 'react'
import NavigationBar from './components/NavigationBar/NavigationBar.jsx';
import ContentArea from './components/ContentArea/ContentArea.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Notification, { notify } from './components/Notifications.jsx';
import { Link } from 'react-router-dom';

function App() {
  const createNotification = (message, type) => {
    notify(message, type);
  }

  const [galleryVisible, setGalleryVisible] = useState(false);


  return (
    <>
      <Notification />
      <NavigationBar />
      <ContentArea />
    </>
  )
}

export default App;
