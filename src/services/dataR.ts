import { dataR } from "../mocks/getData";
import { DataR } from "../types/dataR";

class Datar {
    async get(): Promise<DataR[]>{
        console.log("Pere ta cargando");
        const value: DataR[]= await new Promise((resolve) => {
            setTimeout(()=>resolve(dataR),3000);
        });
        return value;
    }
}

export default new Datar();