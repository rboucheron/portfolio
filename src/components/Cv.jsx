import React from 'react';
import IMAGES from '../assets/img/images';

function Cv(props) {
    window.scrollTo(0, 0);
    return (
        <div className='cv'>
            <img src={IMAGES.cv} alt="cv de raphael boucheron" />
        </div>
    );
}

export default Cv;