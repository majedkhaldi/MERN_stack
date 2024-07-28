import logo from './logo.svg';
import './App.css';
import SaleItem from './SaleItem';
function App() {
  return (
    <div className="App">
    <SaleItem lastname={ "John" } firstname={ "Doe" } age={ 44 } color = {"blond"} />
    <SaleItem lastname={ "Owen" } firstname={ "Snow" } age={ 23 } color = {"black"} />
    <SaleItem lastname={ "Grape" } firstname={ "Juice" } age={ 35 } color = {"brown"} />
    <SaleItem lastname={ "Tomato" } firstname={ "Celery" } age={ 14 } color = {"red"} />
    </div>
  );
}

export default App;
