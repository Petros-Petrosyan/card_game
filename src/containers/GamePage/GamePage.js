import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material
import CircularProgress from '@material-ui/core/CircularProgress';

// classes
import classes from './GamePage.module.scss';

// components
import {
    BotUser,
    RealUser,
    GamingTable,
} from '../../components';

// actions
import {
    getCardsInit
} from '../../store/cardsGame/action';


const GamePage = () => {
    const dispatch = useDispatch();
    const {
        cardsGame: {
            currentInfo: {
                gameIsOver,
                winnerPlayer,
                currentPlayer,
                players,
                cardsOnTable,
            },
            deck: {loading, exist},
            numberOfPlayers,
            playerName,
        },
    } = useSelector((state) => state.cardsReducer);

    useEffect(() => {
        dispatch(getCardsInit(numberOfPlayers, playerName))
    }, []);

    let users = null;
    if (loading) {
        users = <div className={classes.spinner}> <CircularProgress /> </div>
    }
    if (exist) {
            users = players.map((player, i) => {
            const {id} = player;
            if (i === 0) {
                return <RealUser key={id} player={player} />
            }
            return <BotUser key={id} player={player} />
        });
    }

    return (
        <section className={classes.container}>
            {users}
            <GamingTable cards={cardsOnTable} />
        </section>
    )
}


export { GamePage }