import Content from './components/Content/Content';
import FooterButtonGroup from './components/FooterButtonGroup/FooterButtonGroup';
import NavBar from './components/Navbar/Navbar';
import './App.css';

const App = () => {
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
