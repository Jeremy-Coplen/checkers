import React from 'react';

import CheckerBoard from "./Componenets/CheckerBoard/CheckerBoard"
import "./App.scss"

function App() {
  return (
    <div className="app">
      <div className="game_container">
        <CheckerBoard />
      </div>
    </div>
  );
}

export default App;
