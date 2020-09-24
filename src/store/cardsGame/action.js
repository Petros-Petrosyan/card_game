// action types
import {
    GET_CARDS_INIT,
    GET_CARDS_START,
    GET_CARDS_SUCCESS,
    GET_CARDS_FAIL,

    SET_GAME_SETTINGS,
    GENERATE_PLAYERS,
} from '../action-types';


export const getCardsInit = (numberOfPlayers, playerName) => {
    return {
        type: GET_CARDS_INIT,
        payload: {numberOfPlayers, playerName}
    }
};
export const getCardsStart = () => {
    return {
        type: GET_CARDS_START
    }
};
export const getCardsSuccess = (cards) => {
    return {
        type: GET_CARDS_SUCCESS,
        payload: {cards}
    }
};
export const getCardsFail = () => {
    return {
        type: GET_CARDS_FAIL
    }
};

export const setGameSettings = (numberOfPlayers, playerName) => {
    return {
        type: SET_GAME_SETTINGS,
        payload: {numberOfPlayers, playerName}
    }
};

export const generatePlayers = (players) => {
    return {
        type: GENERATE_PLAYERS,
        payload: {players}
    }
};