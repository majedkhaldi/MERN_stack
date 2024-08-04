import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Home from './components/Home';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:nums" element={<Hello />} />
        <Route path="/:nums/:tc/:bc" element={<Hello />} />

      </Routes>
    
    </div>
  );
}

export default App;
