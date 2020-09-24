// saga effects
import {
    all
} from 'redux-saga/effects';

// sagas
import {
    cardsGameSaga
} from './cardsGame/saga';


export function* watchSaga() {
    yield all([
        cardsGameSaga(),
    ])
}