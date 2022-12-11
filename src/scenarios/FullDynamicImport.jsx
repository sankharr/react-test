import "./App.css";
import loadable from "@loadable/component";

const DynamicComponent = loadable((props) => import(`./components/${props.page}`), {
  cacheKey: (props) => props.page,
});

function App() {
  return (
    <div className="App">
      <DynamicComponent page="ComponentA" />
      <DynamicComponent page="ComponentB" />
    </div>
  );
}

export default App;
