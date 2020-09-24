import axios from 'axios';

export const baseRequest = axios.create({
    baseURL: 'https://deckofcardsapi.com'
});

export {
    getDeckRequest,
    getCardsRequest,
} from './cards';