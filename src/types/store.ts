import {Data} from "./data";
import { DataR } from "./dataR";

export type Observed =({ render:() => void} & HTMLElement);

    export type AppState ={
        data: Data[],
        datar: DataR[]
    }

    export enum RecomsActions{
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

export type Actions = AddCardAction| GetCardAction | AddRecomsAction | GetRecomsAction;