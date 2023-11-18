import './App.css';
import { useContext } from 'react';
import { GlobalContext } from './context/Global';

const App = () => {
  const { state } = useContext(GlobalContext);
  console.log('state', state);

  return (
    <div className="App">
      <header className="App-header">
        <div className='context'>White base</div>
      </header>
    </div>
  );
}

export default App;
