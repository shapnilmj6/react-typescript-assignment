import './App.css';
import Squad from "./components/Squad";

function App() {
  return (
    <div>
      <h1 className="top-text">⛹️Player List</h1>
      <div className="mt-5">
        <Squad></Squad>
      </div>
    </div>
  );
}

export default App;