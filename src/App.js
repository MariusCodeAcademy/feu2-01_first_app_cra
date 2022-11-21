import './App.css';
// #1 budas itraukti paveiksleli
import house5 from './house5.jpg';

function App() {
  const name = 'James';

  return (
    <div className='App'>
      <h1 className='mainTitle'>
        Hello111 {name} !!! {150 * 45}
      </h1>
      <h2>house 5</h2>
      <img src={house5} alt='namas penktas' />
      <hr />
      <h2>House 2</h2>
      <img src='/img/house2.jpg' alt='second house' />
    </div>
  );
}

export default App;
