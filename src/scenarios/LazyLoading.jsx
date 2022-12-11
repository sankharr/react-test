import "./App.css";
import { lazy } from "@loadable/component";
import { Suspense } from "react";
const ComponentA = lazy(() => import('./components/ComponentA'));
const ComponentB = lazy(() => import('./components/ComponentB'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <ComponentA />
        <ComponentB />
      </Suspense>
    </div>
  );
}

export default App;
