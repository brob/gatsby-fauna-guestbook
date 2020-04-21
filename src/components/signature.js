import React from 'react';

import './style.scss';

const Signature = ({signature}) => (
    <article className="signature box">
        
        <h3 className="signature__headline">{signature.name} - {signature._ts}</h3>
        <p className="signature__message">
            {signature.message} 
        </p>
    </article>
);

export default Signature;