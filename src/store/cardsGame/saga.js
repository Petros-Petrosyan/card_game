import toast from 'cogo-toast';

// saga effects
import {
    put,
    takeEvery,
    all,
} from 'redux-saga/effects';

// http services
import {
    getDeckRequest,
    getCardsRequest
} from '../../services/http';

// action types
import {
    GET_CARDS_INIT
} from '../action-types';

// actions
import {
    getCardsStart,
    getCardsSuccess,
    getCardsFail,
    generatePlayers,
} from './action';


function* getCards(action) {
    try {
        const {payload: {numberOfPlayers, playerName}} = action;
        const deckRes = yield getDeckRequest();
        const {data: {deck_id: id}} = deckRes;

        yield put(getCardsStart());
        const cardsRes = yield getCardsRequest(id, numberOfPlayers*10);
        const {data: {cards}} = cardsRes;
        yield put(getCardsSuccess(cards));

        const players = [];
        for (let i = 0; i < numberOfPlayers; ++i) {
            const id = i;
            let name = `Player ${i}`;
            let isRealUser = false;
            let current = false;
            const collectedCards = [];
            const playerCards = cards.slice(i*10, (i*10 + 10));

            if (i === 0) {
                name = playerName;
                isRealUser = true;
                current = true;
            }

            players.push({id, name, isRealUser, current, collectedCards, playerCards});
        }
        yield put(generatePlayers(players));

    } catch (err) {
        yield put(getCardsFail());
        toast.error(err.message, {position: 'bottom-right'});
    }
}


export function* cardsGameSaga() {
    yield all([
        takeEvery(GET_CARDS_INIT, getCards),
    ]);
}