import { Data } from "../types/data";
import { DataR } from "../types/dataR";
import { BarData } from "../types/barData";

export const datas: Data[] = [
    {
        username: "Universidad Icesi",
        userpfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrArH4hofnrsMENI9rR9It6xc59aoMDzTRw&usqp=CAU",
        posttext: "#HoyEnIcesi Icecomex invita hoy a las 5:00 p.m., al foro ¿Cómo aperturar mercados internacionales efectivamente?, que tendrá como invitado especial a John Edinson Jiménez, jefe de Exportaciones y Dirección de Negocios Internacionales en Lubristone, quien hablará de la experiencia, los aciertos y desaciertos que han tenido en la apertura de nuevos mercados y la forma en la que han logrado un relacionamiento a largo plazo con sus aliados en el exterior. Conéctate aquí https://lnkd.in/eUVuht9w",
        postimage: "https://media.licdn.com/dms/image/D4E22AQG3F1QEGGthAQ/feedshare-shrink_800/0/1682520526765?e=1685577600&v=beta&t=onEH8tFrOYoecODyW7Ob6-RLzLKtU1yz-NYn3w_HwoE"
    },
    {
        username: "Epson LatinoAmerica",
        userpfp: "https://yt3.googleusercontent.com/ytc/AL5GRJUpjbYn2nRTs6pKoZsmN1wr8vu1KtvcA1_xsPqW9w=s900-c-k-c0x00ffffff-no-rj",
        posttext: "Los resultados de nuestra última encuesta de cambio climático sólo nos alienta y reafirma nuestra dirección. El 63% de las personas estarían listas para no adherir a marcas que no son sustentables en su lucha contra el cambio climático. Sigamos trabajando juntos por nuestro planeta.",
        postimage: "https://media.licdn.com/dms/image/D4E10AQFaCKSbDB0phg/image-shrink_1280/0/1681501000060?e=1683925200&v=beta&t=S39EkckMacAqRBpqnCZDjsBK9BODlJa_8hhmXc2PhDY"
    },
    {
        username: "MIU City University Miami",
        userpfp: "https://media.licdn.com/dms/image/C4D0BAQEMPn6fmWMXSg/company-logo_200_200/0/1667926786276?e=1690416000&v=beta&t=Mu9fj_9yAQeFUELCkkpKGkwnbcHHkolqgmo9VU2ynhQ",
        posttext: "Continuamos con el ciclo de ponencias enfocadas a la empleabilidad de la mano del Dr. Pablo Cardona. En esta ocasión descubriremos cuáles son las habilidades y competencias que debe tener un buen líder en la actualidad.",
        postimage: "https://media.licdn.com/dms/image/sync/C4D22AQHHqH8AMjkCNQ/feedshare-shrink_800/0/1667813828778?e=1685577600&v=beta&t=zTNYSpfrUcvvevCkcRzrlatSVduBAFNW8Y4cU53OV1A"
    },
    {
        username: "SUSE",
        userpfp: "https://www.ecured.cu/images/f/f0/Suse.png",
        posttext: "We are excited to officially welcome Dirk-Peter van Leeuwen (DP) on his first day as our new CEO. He’s an engineer at heart and a veteran of the enterprise #opensource software industry, having built and led businesses around the world.",
        postimage: "https://media.licdn.com/dms/image/sync/D4E10AQFedS3GCJWdTg/image-shrink_800/0/1682923807806?e=1683925200&v=beta&t=ZjFNrxQDaHNx1DIq5QqUPA2I59gM_wU7WOb3pgJSdm4"
    },
    {
        username: "Deel",
        userpfp: "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/3dbec57c-8f53-4fc0-bfba-242bf48bd3de.png?w=90&h=90&fit=max&dpr=3&auto=format&q=50",
        posttext: "Este jueves 20 y viernes 21 de abril se llevará a cabo esta conferencia que reúne empresarios, inversores e innovadores tecnológicos del mundo y muestra los últimos avances en tecnología.",
        postimage: "https://media.licdn.com/dms/image/D4D22AQFzPm7QDiN0dg/feedshare-shrink_800/0/1682008285105?e=1685577600&v=beta&t=icXmKypVW9rUIqyYUUbDdwnxGI0-3mMavcunBC2zEgg"
    }
];

export const dataR: DataR[] = [
    {
        userpfp: "../../dist/imagenes/dian.png",
        username: "DIAN"
    },
    {
        userpfp: "../../dist/imagenes/coomeva.png",
        username: "Coomeva"
    },
    {
        userpfp: "../../dist/imagenes/logo-bancolombia.jpg",
        username: "Bancolombia"
    }
];

export const barData: BarData[] = [
    {
        imgSource: "./imagenes/hogar.png",
        linkRef: "Screens.LOGIN"
    },
    {
        imgSource: "./imagenes/globo.png",
        linkRef: "Screens.SIGNUP"
    },
    {
        imgSource: "./imagenes/maletin.png",
        linkRef: "Screens.DASHBOARD"
    },
    {
        imgSource: "./imagenes/campana.png",
        linkRef: "Screens.RESETPASSWORD"
    },
    {
        imgSource: "./imagenes/usuario.png",
        linkRef: "Screens.RESET"
    }
];