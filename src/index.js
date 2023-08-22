import React, { useState } from 'react';
import './index.css'; 

function App() {
  const [isLightOn, setIsLightOn] = useState(false);
  const [temperature, setTemperature] = useState(72);

  const handleLightToggle = () => {
    setIsLightOn(prevIsLightOn => !prevIsLightOn);
  };

  const increaseTemperature = () => {
    setTemperature(prevTemp => prevTemp + 1);
  };

  const decreaseTemperature = () => {
    setTemperature(prevTemp => prevTemp - 1);
  };

  return (
    <div className="container">
      <div className="controls">
        <button onClick={handleLightToggle} className={`toggle-button ${isLightOn ? 'on' : 'off'}`}>
          {isLightOn ? 'OFF' : 'ON'}
        </button>
        <p className="status">Light Status: {isLightOn ? 'ON' : 'OFF'}</p>
      </div>
      <div className="temperature-controls">
        <p className="temperature">Room Temperature: {temperature}°F</p>
        <button onClick={increaseTemperature} className="temp-button">+</button>
        <button onClick={decreaseTemperature} className="temp-button">-</button>
      </div>
    </div>
  );

export default App;
