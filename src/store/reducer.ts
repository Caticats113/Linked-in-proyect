import { Actions,AppState,CardActions, RecomsActions } from "../types/store";

export const reducer =(currentAction: Actions, currentState: AppState): AppState =>{
    const{action, payload}=currentAction;

switch(action){

    case RecomsActions.ADD:
        return{
            ...currentState,
            datar:[
                payload,
                ...currentState.datar,

            ]
        }
    case RecomsActions.GET:
        return{
            ...currentState,
            datar: payload
        }

    case CardActions.ADD:
        return{
            ...currentState,
            data:[
                payload,
                ...currentState.data,

            ]
        }
    case CardActions.GET:
        return{
            ...currentState,
            data: payload
        }

        defeault:

        return currentState;

    }
}
