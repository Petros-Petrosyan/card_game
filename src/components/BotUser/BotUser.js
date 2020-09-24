import React from 'react';

// images
import bot_user from '../../assets/images/bot_user.png';

// classes
import classes from './BotUser.module.scss';


const BotUser = (props) => {
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

    return (
        <div className={classes.botContainer}>
            <img className={classes.botImg} src={bot_user} />
            <h3>{name}</h3>
        </div>
    )
}


export { BotUser }