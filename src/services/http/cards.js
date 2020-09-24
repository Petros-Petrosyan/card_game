import { baseRequest } from '.';

// get deck
export const getDeckRequest = async () => {
    const res = await baseRequest.get('api/deck/new/shuffle/');
    return res;
}

// get cards
export const getCardsRequest = async (id, count) => {
    const params = {count};
    const res = await baseRequest.get(`api/deck/${id}/draw/`, {params});
    return res;
}
