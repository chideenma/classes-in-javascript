import logo from './logo.svg';
import './App.css';
import people from './components/people';



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the Person list
        </p>
        <div>{people()}</div>
        
      </header>
    </div>
  );
}

export default App;
