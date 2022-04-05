export default ({name, color}) => {
    return( 
        <div className="fighter" style={{backgroundColor: color, backgroundImage: `https://www.smashbros.com/assets_v2/img/fighter/${name.tolowerCase()}/main.png`}}>
            <h4>{name}</h4>
        </div>
    )  
}

