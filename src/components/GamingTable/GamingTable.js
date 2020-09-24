import React from 'react';

// classes
import classes from './GamingTable.module.scss';


const GamingTable = (props) => {
    const {cards} = props;

    const viewCards = cards.map((card, i) => {
        return <img className={classes.img} key={card.code} src={card.image} />;
    });


    return (
        <div className={classes.container}>
            {viewCards}
        </div>
    )
}


export { GamingTable }