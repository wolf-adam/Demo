import './App.css';
import { useContext } from 'react';
import { GlobalContext } from './context/Global';

const App = () => {
  const { state } = useContext(GlobalContext);
  console.log('state', state);

  return (
    <div className='App'>
      <div className='navbar'>Navbar</div>
      <div className='context'>
        <div className='imagePlace'></div>
        <div className='input'>
          <h1>Title</h1>
          <div>Content</div>
        </div>
      </div>
      <div className='button-group'>
        <div className="custom-button">Button text1</div>
        <div className="custom-button inverted">Button text2</div>
      </div>
    </div>
  );
}

export default App;
