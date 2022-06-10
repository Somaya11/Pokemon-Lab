export default function Pokemon(props) {
  return (
    <div>
      <h1>HP: {props.pickachuHP}</h1>
      <h1>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf5JU2qJI0qvYO17t4fvgWqUV7Qa5oSdbT7DCX3mKZJ6gQcW5eHpeLzyarz0TTpW_Kw-c&usqp=CAU"
          alt="pickau"
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
