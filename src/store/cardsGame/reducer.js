import produce from 'immer';

// action types
import {
    GET_CARDS_START,
    GET_CARDS_SUCCESS,
    GET_CARDS_FAIL,

    SET_GAME_SETTINGS,
    GENERATE_PLAYERS,
} from '../action-types';


const initialState = {
    cardsGame: {
        playerName: '',
        numberOfPlayers: 2,
        deck: {
            cards: null,
            loading: false,
            exist: false,
        },
        currentInfo: {
            gameIsOver: false,
            winnerPlayer: null,
            cardsOnTable: [],
            currentPlayer: 0,
            players: null,
        }
    },
};


const getCardsStart = (state) => {
    return produce(state, draftState => {
        draftState.cardsGame.deck.loading = true;
        draftState.cardsGame.deck.exist = false;
    })
};
const getCardsSuccess = (state, payload) => {
    const {cards} = payload;

    return produce(state, draftState => {
        draftState.cardsGame.deck.cards = cards;
    })
};
const getCardsFail = (state) => {
    return produce(state, draftState => {
        draftState.cardsGame.deck.loading = false;
        draftState.cardsGame.deck.exist = false;
    })
};

const setGameSettings = (state, payload) => {
    const {numberOfPlayers, playerName} = payload;

    return produce(state, draftState => {
        draftState.cardsGame.playerName = playerName;
        draftState.cardsGame.numberOfPlayers = numberOfPlayers;
    })
};

const generatePlayers = (state, payload) => {
    const {players} = payload;

    return produce(state, draftState => {
        draftState.cardsGame.currentInfo.players = players;
        draftState.cardsGame.deck.loading = false;
        draftState.cardsGame.deck.exist = true;
    })
};


const cardsGameReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_CARDS_START: return getCardsStart(state)
        case GET_CARDS_SUCCESS: return getCardsSuccess(state, payload)
        case GET_CARDS_FAIL: return getCardsFail(state)
        case SET_GAME_SETTINGS: return setGameSettings(state, payload)
        case GENERATE_PLAYERS: return generatePlayers(state, payload)

        default: return state;
    }
};


export { cardsGameReducer };