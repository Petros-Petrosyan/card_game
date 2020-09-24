import React from 'react';
import { useDispatch } from 'react-redux';

// images
import cards from '../../assets/images/cards.png';

// classes
import classes from './StartPage.module.scss';

// actions
import {
    setGameSettings
} from '../../store/cardsGame/action';

// components
import {
    DialogSelect
} from '../../components';


const StartPage = (props) => {
    const {history: {push}} = props;
    const dispatch = useDispatch();

    const startGame = (numOfPlayers = 2, playerName) => {
        dispatch(setGameSettings(numOfPlayers, playerName));
        push('game');
    }

    return (
        <section className={classes.container}>
            <h2 className={classes.container__title}>Card Game</h2>
            <img className={classes.container__img} src={cards} />
            <DialogSelect onStartGame={startGame} />
        </section>
    )
}


export { StartPage }