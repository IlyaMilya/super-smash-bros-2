
import './App.css';
import Fighter from './components/Fighter';

function App() {
  return (
    <div className={"App"}>
      <h1>Fighters</h1>
       <div className={"fighters-grid"}>
         <Fighter name={"Roy"} color={'red'} img={''} />
         <Fighter name={"Fox"} color={'green'} img={''}/>
         <Fighter name={'Mario'} color={'purple'} img={''}/>
    </div>
  </div>
  
  );
}

export default App;
