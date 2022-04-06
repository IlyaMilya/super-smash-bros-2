import './App.css';
import Fighter from './components/Fighter';
import FighterScreen from './components/FighterScreen';
import { useState } from 'react';
import SideNavigation from './components/SideNavigation';
import LoadingScreen from './components/LoadingScreen';

const characters = [
  {name: 'Roy', color: 'red'},
  {name: 'Fox', color: 'green'},
  {name: 'Ganondorf', color: 'purple'},
  {name: 'Sheik', color: 'lightskyblue'},
  {name: 'Cloud', color:'lightgreen'},
  {name: 'Falco', color: 'Orange'},
  {name: 'Byleth', color: 'firebrick'},
  {name: 'Link', color:'yellow'}
]

function App() {
  const [visible, setVisible] = useState(false)
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0])
  const [loadingScreenVisible, setLoadingScreenVisible] = useState(false)
  
  
  return (
    <div className="App">
     <h1>Fighters</h1>
     <div className="fighters-grid">
        {characters.map((element) => {
          return(<Fighter name={element.name} color={element.color} setVisible={setVisible} setSelectedCharacter={setSelectedCharacter} />)
        })}
     </div>
     <LoadingScreen selectedCharacter={selectedCharacter} loadingScreenVisible= {loadingScreenVisible} /> 
      <FighterScreen isVisible={visible} setVisible={setVisible} selectedCharacter={selectedCharacter} />
      <SideNavigation isVisible={visible} characters={characters} />
    </div>
  );
}

// const Fighter = {name: 'Roy', color: 'red'}

export default App;