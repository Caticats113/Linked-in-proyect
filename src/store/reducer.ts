import { Actions,AppState,CardActions } from "../types/store";

export const reducer =(currentAction: Actions, currentState: AppState): AppState =>{
    const{action, payload}=currentAction;

switch(action){
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
