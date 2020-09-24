// redux
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

// reducers
import {
    cardsGameReducer
} from './cardsGame/reducer';

// sagas
import createSagaMiddleware from 'redux-saga';
import { watchSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    cardsReducer: cardsGameReducer,
});

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchSaga);