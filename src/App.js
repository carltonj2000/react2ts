import './App.css';

function App() {
  const n = ["hi", "there", "someone"];
  return (
    <div className="App">
      <header className="App-header">
    <ul>
    {n.map((i,j) => <li key={j}>{i}</li>)}
    </ul>
      </header>
    </div>
  );
}

export default App;
