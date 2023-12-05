import Content from './components/Content/Content';
import FooterButtonGroup from './components/FooterButtonGroup/FooterButtonGroup';
import NavBar from './components/Navbar/Navbar';
import Animation from './components/Animation/Animation';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <div className='content'>
        <Animation />
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
