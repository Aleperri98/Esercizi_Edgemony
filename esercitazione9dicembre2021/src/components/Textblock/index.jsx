import React from 'react';
import './style.css';

const Textblock = ({ title, price, content }) => (
    <div className="Text_block">
        <div className="headText">
            <h4>{title}</h4>
            <h4>{price}</h4>
        </div>
        <p>{content}</p>
    </div>
)

export default Textblock;