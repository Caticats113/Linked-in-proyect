import { dataR } from "../mocks/getData";
import { DataR } from "../types/dataR";
import Firebase from "../utils/firebase";

class Datar {
    async get(): Promise<DataR[]> {
        console.log("Pere ta cargando");
        try {
            const value = await Firebase.getDatar();
            console.log(value);
            return value;

        } catch (error) {
            console.error("ayuda socorro", error)
            return []
        }
    }
}

export default new Datar();