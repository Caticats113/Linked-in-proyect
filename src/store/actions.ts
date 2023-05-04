import { AddCardAction, GetCardAction, CardActions } from '../types/store';
import data from '../services/data'


export const getTrips = async (): Promise<GetCardAction> => {
    const trips = await data.get();
    return {
        action: CardActions.GET,
        payload: trips
    }
}

export const addNewTrip = ({payload}: Pick<AddCardAction, "payload">): AddCardAction => {
    return {
        action: CardActions.ADD,
        payload
    }
}