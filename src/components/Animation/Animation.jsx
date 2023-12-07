import { useContext } from 'react';

import { MAX_TRIES, Status } from '../../constants/constant';
import { GlobalContext } from '../../context/Global';

const Animation = () => {
    const { status, state } = useContext(GlobalContext);

    const size = '10rem';
    const base = [
        { d: "M1,11 h8" },
        { d: "M9,11 v-10" },
        { d: "M9,1 h-4" },
        { d: "M5,1 v2" },
    ]
    const body = [
        { d: "M5,5 l-2,2" },
        { d: "M5,5 l2,2" },
        { d: "M5,5 v3" },
        { d: "M5,8 l-2,2" },
        { d: "M5,8 l2,2" },
    ]

    const isVisible = showAfterNthMiss => {
        // On start show the whole figure
        const wrongGuesses = status === Status.START ? MAX_TRIES : MAX_TRIES - state.guessesLeft;

        return showAfterNthMiss <= wrongGuesses;
    };

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 12"
            height={size}
            width={size}
            style={{ margin: '2rem' }}
        >
            {base.map(path => (
                <path d={path.d} visibility="visible" />
            ))}
            <circle
                cx="5" cy="4" r="1"
                visibility={isVisible(1) ? "visible" : "hidden"}
            />
            {body.map((path, idx) => (
                <path d={path.d} visibility={isVisible(idx + 2) ? "visible" : "hidden"} />
            ))}
        </svg>
    );
};

export default Animation;
