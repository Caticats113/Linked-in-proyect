import { Data } from "../types/data";
import { datas } from "../mocks/getData";


class Datas {
    async get(): Promise<Data[]>{
        console.log("Pere ta cargando");
        const value: Data[]= await new Promise((resolve) => {
            setTimeout(()=>resolve(datas),1000);
        });
        return value;
    }
}

export default new Datas();


