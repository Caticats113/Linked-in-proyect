import { AddCardAction, GetCardAction, CardActions, RecomsActions, AddRecomsAction,
    GetRecomsAction,NavigateAction, NavigationActions, Screens,UserActions } from '../types/store';
import data from '../services/data';
import dataR from '../services/dataR';

export const setUserCredentials=(user:string)=>{
    return{
        action:UserActions.SET_USER,
        payload:user,

    }
}

export const getDataR = async (): Promise<GetRecomsAction> => {
    const datae = await dataR.get();
    return {
        action: RecomsActions.GET,
        payload: datae
    }
}

export const addNewDataR = ({payload}: Pick<AddRecomsAction, "payload">): AddRecomsAction => {
    return {
        action: RecomsActions.ADD,
        payload
    }
}


export const getData = async (): Promise<GetCardAction> => {
    const datai = await data.get();
    return {
        action: CardActions.GET,
        payload: datai
    }
}

export const addNewData = ({payload}: Pick<AddCardAction, "payload">): AddCardAction => {
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

