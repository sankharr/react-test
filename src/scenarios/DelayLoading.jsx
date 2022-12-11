import { useState } from "react";
import "./App.css";
import loadable from "@loadable/component";
import pMinDelay from 'p-min-delay'


const ComponentA = loadable(() => pMinDelay(import("./components/ComponentA"), 1000));

function App() {
  const [state, setState] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setState(!state)}>Update State</button>
      {state && <ComponentA fallback={<div>Loading.....</div>}/>}
    </div>
  );
}

export default App;
