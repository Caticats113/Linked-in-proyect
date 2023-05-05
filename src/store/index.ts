import Storage, {PersistanceKeys} from "../utils/storage";
import { Actions, AppState, Observed } from "../types/store";
import { reducer } from "./reducer";

const emptyState:AppState = { // Create the appState and we export it
    // username:"", //We put here the elements of our component
    // userpfp:"",
    // posttext:"",
    // postimage:"",

    data: [],
    datar:[],
};

export let appState = Storage.get<AppState>({
    key: PersistanceKeys.STORE,
    defaultValue: emptyState,
});

let observers:Observed[]=[];

const persistStore =(state: AppState)=>
    Storage.set({key:PersistanceKeys.STORE,value:state});

const notifyObservers =()=> observers.forEach((o)=> o.render());

export const dispatch =(action:Actions) =>{
    const clone= JSON.parse(JSON.stringify(appState));
    const newState=reducer(action,clone);
    appState=newState;

    persistStore(newState);
    notifyObservers();
};

export const addObserver=(ref:Observed)=>{
    observers=[...observers,ref];
};




