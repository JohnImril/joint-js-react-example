import "./App.css";
import JointLayer from "./components/JointLayer/JointLayer";
import Graph from "./components/Graph/Graph";

const App = () => {
  return (
    <div className="app">
      <header className="app-header"></header>
      <h1>Non-editable circuit</h1>
      <Graph />

      <h1>Editable circuit</h1>
      <JointLayer />
    </div>
  );
};

export default App;
