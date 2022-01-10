// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



// export default App;

import "./App.css";
import { useState } from "react";

export default function App() {
  // const myname="dora";
  // const frndname="babu"
  // const names=["dorababu", "kavitha", "raghurama raju"]
  // const data=[{name:"death vader", image:"https://media.istockphoto.com/photos/toned-portrait-of-darth-vader-mask-and-helmet-picture-id585592844?k=20&m=585592844&s=612x612&w=0&h=23FFerr1WefNdzr-zqexG7AazFr11Y3o9I_T_sfpieE="}, {name:"yoda", image:"https://images.unsplash.com/photo-1553286158-5f5dac259bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhciUyMHdhcnMlMjBqZWRpfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}, {name:"Anakin Skywalker", image:"data:image/jpeg;base64,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"}]
  const movie=[{name:"Avengers EndGame", poster:"https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810", rating:8.4, summary:"After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance."}, {name:"Asuran", poster:"https://1.bp.blogspot.com/-gIhI4rI620w/Xcqo4GjKtLI/AAAAAAAA10k/L0TsqlMKwrsfRWd0S9LKn8PK8OLjkJ3MwCLcBGAsYHQ/s1600/asuran_156801306550.jpg", rating:8.6, summary:"A farmer goes on the run with his family as he is compelled to protect his son, who has murdered a wealthy upper-caste landlord in a fit of vengeance."},{name:"Inferno", poster:"https://upload.wikimedia.org/wikipedia/en/6/66/Inferno_%282016_film%29.png", rating:6.2, summary:"After waking up with amnesia in a hospital, Robert Langdon teams up with Sienna Brooks, one of his doctors, to protect the world from the evil plan of a mad scientist."}, {name:"Rampage", poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsk7x0EUXg4WbwcZgIh93VYHQPjubCtDQhEA&usqp=CAU", rating:6.1, summary:"Primatologist Davis Okoye teams up with a geneticist, Dr Kate Caldwell, and tries to save George, an albino gorilla, and prevent two giant mutated animals from wreaking havoc in Chicago."}, {name:"Captain America: The First Avenger", poster:"https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_.jpg", rating:6.9, summary:"During World War II, Steve Rogers decides to volunteer in an experiment that transforms his weak body. He must now battle a secret Nazi organisation headed by Johann Schmidt to defend his nation."}];
  return (
    <div className="App">
      {/* <h1>{frndname} is a friend of {myname}</h1>
      <Msg name="dorababu" word="hello is my word" />
      <h2>Start editing to see some magic happen!</h2>
      <br/><br/> */}
      {/* <Task1 name="death vader" image="https://media.istockphoto.com/photos/toned-portrait-of-darth-vader-mask-and-helmet-picture-id585592844?k=20&m=585592844&s=612x612&w=0&h=23FFerr1WefNdzr-zqexG7AazFr11Y3o9I_T_sfpieE=" />
      <Task1 name="yoda" image="https://images.unsplash.com/photo-1553286158-5f5dac259bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhciUyMHdhcnMlMjBqZWRpfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
      <Task1 name="Anakin Skywalker" image="data:image/jpeg;base64,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" /> */}
      {/* {data.map(({name,image}) => <Task1 name={name} image={image} />)}
      {names.map(nm => <Welcome name={nm} />)} */}
      <section className="movie-list">
      {movie.map(({name,poster,summary,rating}) => <Movie rating={rating} name={name} summary={summary} poster={poster} />)}
      </section>
    </div>
  );
}


function Counter(){

  //setLike -- updates Like
  const [Like, setLike]= useState(0);
  const [disLike, setdisLike]= useState(0)
  return(<div className="counter-container">
    <button onClick={()=> setLike(Like+1)}>👍 {Like}</button>
    <button onClick={()=> setdisLike(disLike+1)}>👎 {disLike}</button>
    
  </div>);
}


function Msg(props){
  /*const name="dora babu";*/
  console.log(props);
  return (<div><h1>🙋‍♂️, {props.name}!!!😊 {props.word}</h1></div>);
}

// function Task1({image, name}){
//   return (<div className="newcon">
//     <div>
//     <img src={image} alt="image" className="image"/>
//     </div>
//       <h1>{name}</h1>
//       </div>);
// }

let Task1=({image, name}) => {return (<div className="newcon">
     <div>
     <img src={image} alt="image_logo" className="image"/>
     </div>
     <h1>{name}</h1>
     </div>);
     
    };

let Welcome=({name}) => {
  console.log(name);
  return (<div>
  <h1>My name is {name}</h1>
  </div>
  );
  };

function Movie({poster,name,rating,summary}){
  return (<div className="movie-container">
    <img className="movie-poster" src={poster} alt={name} />
    <div className="movie-specs">
    <h3 className="movie-name">{name}</h3>
    <p className="movie-rating">⭐ {rating} </p>
    </div>
    <p className="movie-summary">{summary}</p>
    <Counter />
  </div>);
}

function Useless(){
  return(<div className="useless"></div>);
}


