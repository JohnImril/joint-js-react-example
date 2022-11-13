import "./App.css";
import JointLayer from "./components/JointLayer/JointLayer";
import Graph from "./components/Graph/Graph";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">Hello</header>
      <h1>Class Component</h1>
      <Graph />

      <h1>Functional Component</h1>
      <JointLayer />
    </div>
  );
};

export default App;
