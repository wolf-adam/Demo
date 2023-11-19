import Button from '../Button/Button';
import './LetterButton.css';

const LetterButton = ({ disabled, onClick, text }) => {
    return (
        <Button className='letter-button bold' onClick={onClick} disabled={disabled}>
            {text.toUpperCase()}
        </Button>
    );
};

export default LetterButton;
