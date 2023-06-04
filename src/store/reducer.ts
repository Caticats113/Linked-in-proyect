import { appState } from ".";
import { Actions,AppState,CardActions,RecomsActions,NavigationActions, UserActions } from "../types/store";
import firebase from "../utils/firebase";
import { Screens } from "../types/store";

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
    const { action, payload } = currentAction;
    const clone = JSON.parse(JSON.stringify(currentState));

switch(action){
    case CardActions.ADD:
        return{
            ...currentState,
            data:[
                payload,
                ...currentState.data,

            ]
        }
    case RecomsActions.GET:
        return{
            ...currentState,
            datar: payload
        }

        case RecomsActions.ADD:
            return{
                ...currentState,
                datar:[
                    payload,
                    ...currentState.data,

                ]
            }
        case CardActions.GET:
            return{
                ...currentState,
                data: payload
            }

            case NavigationActions.NAVIGATE:
            return {
                ...clone,
                screen: payload,
            }

            case UserActions.SET_USER:
                appState.user=payload;
                return appState

            defeault:
            return appState;

    }
}
