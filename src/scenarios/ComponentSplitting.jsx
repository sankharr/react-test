import { useState } from "react";
import "./App.css";
// import ComponentA from './components/ComponentA';
import loadable from "@loadable/component";

const ComponentA = loadable(() => import("./components/ComponentA"));

function App() {
  const [state, setState] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setState(!state)}>Update State</button>
      {state && <ComponentA />}
    </div>
  );
}

export default App;
