import { useState } from "react";
import "./App.css";
import loadable from "@loadable/component";
const Moment = loadable.lib(() => import("moment"));

function App() {
  const [state, setState] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setState(!state)}>Update State</button>
      {state && (
        <Moment fallback={<p>Loading..........</p>}>
          {({ default: moment }) => moment("2026-02-23").fromNow()}
        </Moment>
      )}
    </div>
  );
}

export default App;