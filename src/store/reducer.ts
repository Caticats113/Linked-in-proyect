import { Actions, AppState, NavigationActions, CreatePost } from "../types/store";

export const reducer = (
    currentAction: Actions,
    currentState: AppState
): AppState => {
    const { action, payload } = currentAction;
    const clone = JSON.parse(JSON.stringify(currentState))

    switch (action) {
        case NavigationActions.NAVIGATE:
            return {
                ...clone,
                screen: payload,
            }


            case "NEW_POST":
                return {
                    ...clone,
                    datas:payload
                }

        default:
            return clone;
    }
};