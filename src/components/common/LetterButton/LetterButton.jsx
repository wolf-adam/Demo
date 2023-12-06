import Button from '../Button/Button';
import styles from './LetterButton.module.css';

const LetterButton = ({ disabled, onClick, text, selected, isLetter }) => {
    let classNames = [styles.bold];

    // Alternative solution: 
    // - use `classnames` package for +18.8 KB 
    if (selected) classNames.push(styles.selected);
    if (isLetter) classNames.push(styles.letter);
    else classNames.push(styles.length);

    return (
        <Button
            className={classNames.join(' ')}
            onClick={onClick}
            disabled={disabled}
        >
            {typeof text === String ? text.toUpperCase() : text}
        </Button>
    );
};

export default LetterButton;
