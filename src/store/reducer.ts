import { Actions, AppState, CardActions, NavigationActions } from "../types/store";

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
    const { action, payload } = currentAction;
    const clone = JSON.parse(JSON.stringify(currentState));

    switch (action) {
        case CardActions.ADD:
            return {
                ...clone,
                data: [
                    payload,
                    ...clone.data,
                ]
            }

        case CardActions.GET:
            return {
                ...clone,
                data: payload
            }

            case NavigationActions.NAVIGATE:
            return {
                ...clone,
                screen: payload,
            }

            defeault:
            return clone;

    }
}
