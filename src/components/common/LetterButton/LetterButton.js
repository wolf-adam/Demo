import Button from '../Button/Button';
import './LetterButton.css';

const LetterButton = ({ disabled, onClick, text, selected }) => {
    let classNames = ['letter-button', 'bold'];
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
