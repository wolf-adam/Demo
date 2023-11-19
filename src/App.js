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
      <div className='context'>
        <div className='imagePlace'></div>
        <div className='input'>
          <h1>Title</h1>
          <div>Content</div>
          <LetterButtonGroup />
        </div>
      </div>
      <FooterButtonGroup />
    </div>
  );
}

export default App;
