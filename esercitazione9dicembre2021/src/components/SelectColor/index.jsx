import React from 'react';
import './style.css';

const SelectColor = () => (
    <div className="SelectColor">
        <h4>Color</h4>
        <div className="Color">
            <button className="dot" id="first"></button>
            <button className="dot" id="second"></button>
            <button className="dot" id="third"></button>
            <button className="dot" id="fourth"></button>
        </div>
    </div>
)

export default SelectColor