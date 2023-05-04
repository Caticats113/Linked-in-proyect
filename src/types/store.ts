import {Data} from "./data";

export type Observed =({ render:() => void} & HTMLElement);

export type AppState ={
    data: Data[]
}

export enum CardActions{
    "ADD" = "ADD",
    "GET" = "GET",
}

export interface AddCardAction{
    action: CardActions.ADD,
    payload:Data,
}

export interface GetCardAction{
    action: CardActions.GET,
    payload: Data[]
}

export type Actions = AddCardAction| GetCardAction;