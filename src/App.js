import ResultPanel from './components/Content/ResultPanel/ResultPanel';
import Animation from './components/Animation/Animation';
import Content from './components/Content/Content';
import FooterButtonGroup from './components/FooterButtonGroup/FooterButtonGroup';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <h1 className="mt-3">Hangman '23</h1>
        <ResultPanel />
        <div className={styles.content}>
          <Animation />
          <div className={styles.input}>
            <Content />
          </div>
        </div>
      </div>
      <FooterButtonGroup />
    </div>
  );
}

export default App;
