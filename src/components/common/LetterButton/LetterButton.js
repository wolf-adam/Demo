import Button from '../Button/Button';
import './LetterButton.css';

const LetterButton = ({ disabled, onClick, text, selected, isLetter }) => {
    let classNames = ['bold'];
    if (isLetter) classNames.push('letter-button');
    else classNames.push('length-button');
    if (selected) classNames.push('selected');

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
