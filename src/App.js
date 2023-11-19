import { useContext } from 'react';

import { GlobalContext } from './context/Global';
import LetterButtonGroup from './components/LetterButtonGroup/LetterButtonGroup';
import FooterButtonGroup from './components/FooterButtonGroup/FooterButtonGroup';
import './App.css';

const App = () => {
  const { state } = useContext(GlobalContext);
  console.log('state', state);

  return (
    <div className='App'>
      <div className='navbar'>Navbar</div>
      <div className='content'>
        <div className='imagePlace'></div>
        <div className='input'>
          <h1>Hangman '23</h1>
        </div>
      </div>
      <FooterButtonGroup />
    </div>
  );
}

export default App;
