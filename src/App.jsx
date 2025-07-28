
import './App.css'
import Card1 from './Card1.jsx'
import Card2 from './Card2.jsx'
import { useState } from "react"

function App() {
    const [showCard1, setShowCard1] = useState(true);

    function handleToggleClick(){
      setShowCard1(!showCard1);
    }
    return(

      <div id="app-container"> {/* A container for the cards*/}
        {showCard1 ? (<Card1 className="card" />) : (<Card2 className="card" />)}

        <button className="toggle-button" onClick={handleToggleClick}>
          {showCard1 ? "Show Backside" : "Show FrontSide"}
        </button>
      </div>
    );
}

export default App
