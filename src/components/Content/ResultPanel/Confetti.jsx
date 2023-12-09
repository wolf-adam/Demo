import { useContext, useEffect, useState } from "react";
import ConfettiExplosion from 'react-confetti-explosion';
import { MAX_TRIES } from "../../../constants/constant";

import { GlobalContext } from "../../../context/Global";

const ExplosionType =
{
    large: {
        force: 0.8,
        duration: 3000,
        particleCount: 250,
        width: 1600,
    },
    medium: {
        force: 0.6,
        duration: 2500,
        particleCount: 80,
        width: 1000,
    },
    small: {
        force: 0.4,
        duration: 2200,
        particleCount: 30,
        width: 400,
    }
}

// const getExplosionMagnitude = percent => Object
//     .keys(ExplosionType.large)
//     .reduce((acc, key) => {
//         acc[key] =
//             ExplosionType.small[key] + ((ExplosionType.large[key] - ExplosionType.small[key]) * percent);
//         return acc;
//     }, {});
//
// * Less complex version:
const getExplosionMagnitude = percent => {
    // Get difference for all props of `ExplosionType.large` and `ExplosionType.small`
    // multiplied by the percentage
    const magnitude = Object.keys(ExplosionType.large).reduce((acc, key) => {
        acc[key] = (ExplosionType.large[key] - ExplosionType.small[key]) * percent;
        return acc;
    }, {});

    // Add magnitude to smallest to create a sliding interval based on percentage
    return Object.keys(magnitude).reduce((acc, key) => {
        acc[key] = ExplosionType.small[key] + magnitude[key];
        return acc;
    }, {});
}


const Confetti = () => {
    const { hasGameEnded, state } = useContext(GlobalContext);

    const [isExploding, setIsExploding] = useState(false);

    useEffect(() => {
        if (state.result) setIsExploding(true)
    }, [hasGameEnded, state.result]);

    if (!isExploding) return null;

    // Set explosion's magnitude based on how great the player was at guessing
    const percent = +(state.guessesLeft / MAX_TRIES).toFixed(1)

    // Will only active if player won
    return <ConfettiExplosion {...getExplosionMagnitude(percent)} />;
};

export default Confetti;
