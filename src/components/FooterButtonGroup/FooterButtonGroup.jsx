import { useContext } from "react";

import { GlobalContext } from "../../context/Global";
import { Status } from "../../constants/constant";
import Button from "../common/Button/Button";
import './FooterButtonGroup.css';

const FooterButtonGroup = () => {
  const { status, setStatus } = useContext(GlobalContext)

  let buttons;
  switch (status) {
    case Status.START:
      buttons = [{ text: "let's play", inverted: true, onClick: () => setStatus(Status.INSTRUCTIONS) }]
      break;
    case Status.INSTRUCTIONS:
      buttons = [{ text: "got it", inverted: true, onClick: () => setStatus(Status.NEW_GAME) }]
      break;
    default:
      buttons = [
        { text: "end game", inverted: false, onClick: () => setStatus(Status.END) },
        { text: "start new game", inverted: true, onClick: () => setStatus(Status.NEW_GAME) }
      ]
      break;
  }

  return (
    <div className='footer-button-group'>
      {buttons.map(button => (
        <Button key={button.text} inverted={button.inverted} onClick={button.onClick}>
          {button.text.toUpperCase()}
        </Button>
      ))}
    </div>
  );
};

export default FooterButtonGroup;
