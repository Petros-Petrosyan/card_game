import React from 'react';

// images
import real_user from '../../assets/images/real_user.png';

// classes
import classes from './RealUser.module.scss';


const RealUser = (props) => {
    const {
        player: {
            id,
            name,
            isRealUser,
            current,
            collectedCards,
            playerCards
        }
    } = props;

    const cards = playerCards.map((card) => {
        const {code, value} = card
        return <img key={code} className={classes.cardImg} src={card.image} />
    });

    return (
        <div className={classes.userContainer}>
            <div className={classes.userContainer__cards}>
                {cards}
            </div>
            <div className={classes.userContainer__user}>
                <img className={classes.userImg} src={real_user} />
                <h3>{name}</h3>
            </div>
        </div>
    )
}


export { RealUser }