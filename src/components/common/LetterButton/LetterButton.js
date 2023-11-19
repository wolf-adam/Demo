import Button from '../Button/Button';
import './LetterButton.css';

const LetterButton = ({ disabled, onClick, text }) => {
    return (
        <Button className='letter-button bold' onClick={onClick} disabled={disabled}>
            {typeof text === String ? text.toUpperCase() : text}
        </Button>
    );
};

export default LetterButton;
