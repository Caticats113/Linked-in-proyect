import {Data} from "./data";
import { DataR } from "./dataR";

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
        data: Data[],
        datar: DataR[]
        user:{};
    }

    export enum UserActions{
        "SET_USER"="SET_USER"
    }

    export enum RecomsActions{
        "ADD" = "ADD",
        "GET" = "GET",
    }

    export enum CardActions{
        "ADD" = "ADD",
        "GET" = "GET",
    }

    export interface AddRecomsAction{
        action: RecomsActions.ADD,
        payload:DataR,
    }

    export interface GetRecomsAction{
        action: RecomsActions.GET,
        payload: DataR[]
    }


export interface NavigateAction {
    action: NavigationActions.NAVIGATE,
    payload: Screens,
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
        action: NavigationActions.NAVIGATE,
        payload: Screens,
    }

    export interface SetUser{
        action: UserActions.SET_USER;
        payload: string;
    }

export type Actions = AddCardAction| GetCardAction | AddRecomsAction | GetRecomsAction|NavigateAction|SetUser;