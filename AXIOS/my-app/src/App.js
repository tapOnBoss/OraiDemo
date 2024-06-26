import React, {useState} from "react";
import Axios from "axios";
function App() {
  //API call openweathermap.org miesto pavadinimas
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=kaunas&appid=8457d28bb6f318afef1f5639617115a8`
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location"><p>Kaunas</p></div>
          <div className="temp"><h1>20°C</h1></div>
          <div className="description"><p>debesuota</p></div>
        </div>
        <div className="bottom">
          <div className="feels"><p>15°C</p></div>
          <div className="huidity"><p>30%</p></div>
          <div className="wind">0KMH</div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
