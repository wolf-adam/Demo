// import { useContext } from 'react';

// import { GlobalContext } from './context/Global';
import Content from './components/Content/Content';
import FooterButtonGroup from './components/FooterButtonGroup/FooterButtonGroup';
import './App.css';
import NavBar from './components/Navbar/Navbar';

const App = () => {
  // const { state } = useContext(GlobalContext);

  return (
    <div className='App'>
      <NavBar />
      <div className='content'>
        <div className='imagePlace'></div>
        <div className='input'>
          <h1>Hangman '23</h1>
          <Content />
        </div>
      </div>
      <FooterButtonGroup />
    </div>
  );
}

export default App;
