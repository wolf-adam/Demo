import NavBar from './components/Navbar/Navbar';
import Animation from './components/Animation/Animation';
import Content from './components/Content/Content';
import FooterButtonGroup from './components/FooterButtonGroup/FooterButtonGroup';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.content}>
        <Animation />
        <div className={styles.input}>
          <h1>Hangman '23</h1>
          <Content />
        </div>
      </div>
      <FooterButtonGroup />
    </div>
  );
}

export default App;
