import React from 'react';
import './style.css';
import Textblock from '../Textblock';
import ImageCard from '../Image';
import SelectSize from '../SelectSize';
import SelectColor from '../SelectColor';

const Card = ({urlImage, title, price, content }) => (
    <div className="Card">
            <ImageCard urlImage={urlImage}/>
        <div className="cardTemplate">
            <Textblock title={title} price={price} content={content}/>
            <SelectColor/>
            <SelectSize/>
            <button className="btn">Add to Cart</button>
        </div>
    </div>
)

export default Card;