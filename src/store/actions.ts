import { AddCardAction, GetCardAction, CardActions, NavigateAction, NavigationActions, Screens } from '../types/store';
import data from '../services/data'


export const getData = async (): Promise<GetCardAction> => {
    const trips = await data.get();
    return {
        action: CardActions.GET,
        payload: trips
    }
}

export const addNewPost = ({payload}: Pick<AddCardAction, "payload">): AddCardAction => {
    return {
        action: CardActions.ADD,
        payload
    }
}

export const navigate = (screen: Screens): NavigateAction => {
    return {
        action: NavigationActions.NAVIGATE,
        payload: screen
    }
}
