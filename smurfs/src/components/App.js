import React, { Component, createContext } from "react";
import "./App.css";
import GetSmurf from './getSmurf';
import FormikCreateSmurf from './createSmurf';


const SmurfsContext = createContext();

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <SmurfsContext.Provider value={activeSmurfs}> */}
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <FormikCreateSmurf/>
        <GetSmurf/>
        {/* </SmurfsContext.Provider> */}
      </div>
    );
  }
}

export default App;
