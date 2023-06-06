import { Data } from "../types/data";
import { datas } from "../mocks/getData";
import Firebase from "../utils/firebase";


class Datas {
    async get(): Promise<Data[]> {
        console.log("Pere ta cargando");
        try {
            const value = await Firebase.getPosts();
            console.log(value);
            return value;

        } catch (error) {
            console.error("ayuda socorro", error)
            return []
        }
        // const value: Data[]= await new Promise((resolve) => {
            // setTimeout(()=>resolve(datas),1000);
        // });
        // return value;
    }

    // async add(payload: any) {
    //     try {
    //         const value = await Firebase.addPost(payload);
    //         console.log("post", value);
    //     } catch (error) {
    //         console.error("ayuda socorro", error);
    //         return []
    //     }
    // }
}

export default new Datas();


