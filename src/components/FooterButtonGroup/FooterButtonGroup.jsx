import { useContext } from "react";

import { GlobalContext } from "../../context/Global";
import { ActionType, Status } from "../../constants/constant";
import Button from "../common/Button/Button";
import './FooterButtonGroup.css';

const FooterButtonGroup = () => {
  const {
    dispatch,
    status,
    setStatus,
    word,
    setWord,
    hasGameEnded,
  } = useContext(GlobalContext)

  let buttons;
  switch (status) {
    case Status.START:
      buttons = [
        {
          text: "let's play",
          inverted: true,
          onClick: () => setStatus(Status.NEW),
          disabled: !word,
        }
      ]
      break;
    case Status.INSTRUCTIONS:
      buttons = [{
        text: "got it",
        inverted: true,
        onClick: () => setStatus(Status.NEW)
      }]
      break;
    default:
      buttons = [
        {
          text: "end game",
          inverted: false,
          onClick: () => setStatus(Status.END),
          disabled: hasGameEnded
        },
        {
          text: "start new game",
          inverted: true,
          onClick: () => {
            dispatch({ type: ActionType.RESET })
            setStatus(Status.START);
            setWord('');
          }
        }
      ]
      break;
  }

  return (
    <div className='footer-button-group'>
      {buttons.map(button => (
        <Button
          key={button.text}
          inverted={button.inverted}
          onClick={button.onClick}
          disabled={button.disabled}
        >
          {button.text.toUpperCase()}
        </Button>
      ))}
    </div>
  );
};

export default FooterButtonGroup;
