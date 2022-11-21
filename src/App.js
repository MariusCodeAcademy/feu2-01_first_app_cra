import './App.css';
// #1 budas itraukti paveiksleli
import house5 from './house5.jpg';

const card1 = (
  <div className='card'>
    <h4 className='card__title'>house 5</h4>
    <img className='card__img' src={house5} alt='namas penktas' />
  </div>
);
const card2 = (
  <div className='card'>
    <h4 className='card__title'>house 2</h4>
    <img className='card__img' src='/img/house2.jpg' alt='namas antras' />
  </div>
);

function App() {
  const name = 'James';

  return (
    <div className='App'>
      <h1 className='mainTitle'>
        Hello111 {name} !!! {150 * 45}
      </h1>

      {card1}
      {card2}
      {card1}
      {card2}
      {card1}
      {card2}

      <hr />
      <h2>House 2</h2>
      <img src='/img/house2.jpg' alt='second house' />
    </div>
  );
}

export default App;
