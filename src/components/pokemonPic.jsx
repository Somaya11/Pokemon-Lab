export default function Pokemon(props) {
    return (
      <div>
        <h1>HP: {props.pickachuHP}</h1>
        <h1>
          <img
            src="props.pokemonImage"
            alt="pikachu"
          ></img>
        </h1>
        <button onClick={()=>props.pickachuAttack()}>Attack</button>
  
        <h1>HP: {props.charizardHP}</h1>
        <h1>
          <img
            src="https://i.pinimg.com/originals/cb/b8/54/cbb854131b0f06e3ccd0a2452b6abc6f.png"
            alt="charrazord"
          ></img>
        </h1>
        <button onClick={()=>props.charizardAttack()}>Attack</button>
        <h2> Status: {props.status} </h2>
      </div>
    );
  }
  