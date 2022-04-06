const FighterScreen = ({isVisible, setVisible, selectedCharacter}) => {
    return(
      <div onClick={() => { setVisible(false) }} className="fighter-screen" style={{display: isVisible ? "block" : "none"}}>
        <span className="name-bg">{selectedCharacter.name}</span>
        <h2 className="name-fg">{selectedCharacter.name}</h2>
        <img className="char-portrait" src={`https://www.smashbros.com/assets_v2/img/fighter/${selectedCharacter.name.toLowerCase()}/main.png`} />
        <p className="fighter-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptatem pariatur. Quos quasi repudiandae, maxime reiciendis labore cupiditate, eligendi similique ratione, dolor est excepturi recusandae voluptas odio ipsam reprehenderit debitis!
         </p>
    </div>
    )
  }
  
  export default FighterScreen;
 