export type Observer = { render: () => void } & HTMLElement;

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

export interface Data{
    username : string,
    userpfp : string,
    posttext : string,
    postimage : string
}

export interface DataR{
    username : string,
    userpfp : string
}

export interface BarData{
    imgSource : string,
    linkRef : string
}

export type AppState = {
    screen: Screens;
    datas: Data[];
    dataR: DataR[];
    barData: BarData[];
};

export enum NavigationActions {
    "NAVIGATE" = "NAVIGATE",
}

export interface NavigateAction {
    action: NavigationActions.NAVIGATE;
    payload: Screens;
}

export interface CreatePost {
    action: "NEW_POST";
    payload: Data;
}

export type Actions = NavigateAction | CreatePost;