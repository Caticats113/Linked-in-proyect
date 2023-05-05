import {Data} from "./data";

export type Observed =({ render:() => void} & HTMLElement);

export enum Screens {
    LOGIN = "LOGIN",
    SIGNUP = "SIGNUP",
    DASHBOARD = "DASHBOARD",
    EXPLORER = "EXPLORER",
    JOBS = "JOBS",
    NOTIFICATIONS = "NOTIFICATIONS",
    RESET_PASWORD = "RESET_PASWORD",
    RESET = "RESET"
}

export type AppState ={
    screen: Screens;
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

export enum NavigationActions {
    "NAVIGATE" = "NAVIGATE",
}

export interface NavigateAction {
    action: NavigationActions.NAVIGATE | String,
    payload: Screens,
}

export type Actions = AddCardAction| GetCardAction | NavigateAction;