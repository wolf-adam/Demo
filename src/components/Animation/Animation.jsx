import { useContext } from 'react';
import { Status } from '../../constants/constant';

import { GlobalContext } from '../../context/Global';
import './Animation.css';

const Animation = () => {
    const { status } = useContext(GlobalContext);

    if (status === Status.INSTRUCTIONS) return null;

    return (
        <div className='imagePlace' />
    );
};

export default Animation;
