import { appState, dispatch } from "../../store";
import styles from "./createpost.css";
import Firebase from "../../utils/firebase";

const postInputs = {
    userpfp: "",
    username: "",
    posttext: "",
    postimage: ""
}

export default class CreatePost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = ""

        const newPost = this.ownerDocument.createElement('div');
        newPost.setAttribute("class", "creted");

        const user = this.ownerDocument.createElement('section');
        user.setAttribute("class", "create");

        const userpfp = this.ownerDocument.createElement('img');
        userpfp.setAttribute("id", "perfil");
        userpfp.setAttribute("src", "https://firebasestorage.googleapis.com/v0/b/linkedinauth-c0893.appspot.com/o/perfil.png?alt=media&token=b2876fd1-28b5-4d5a-92d3-78003f2509a6&_gl=1*1xnwklv*_ga*NDk4ODU0MTU3LjE2ODI0Mjc4NTQ.*_ga_CW55HF8NVT*MTY4NjA1NzMzOS4xNi4xLjE2ODYwNTczNjYuMC4wLjA.");
        user.appendChild(userpfp);

        const userName = this.ownerDocument.createElement('input');
        userName.setAttribute("id", "navv");
        userName.placeholder = "Username";
        user.appendChild(userName);

        newPost.appendChild(user);

        const post = this.ownerDocument.createElement("section")
        post.setAttribute("class", "create");

        const postText = this.ownerDocument.createElement('input');
        postText.setAttribute("id", "navv");
        postText.placeholder = "Post text";
        post.appendChild(postText);

        const postbtn = this.ownerDocument.createElement('button');
        postbtn.innerText = "Post";
        postbtn.addEventListener("click", (() => {
            postInputs.username = userName.value;
            postInputs.posttext = postText.value;
            function getImage():number {
                const imageNumber = Math.floor(Math.random() * 5);
                console.log(imageNumber)
                return imageNumber;
            }
            const imgNum = getImage()
            switch (imgNum) {
                case 0:
                    postInputs.postimage = "https://firebasestorage.googleapis.com/v0/b/linkedinauth-c0893.appspot.com/o/imagen1.jpg?alt=media&token=99e7042f-4114-4a6c-ad2a-ec4bc2d64297&_gl=1*m9nfpg*_ga*NDk4ODU0MTU3LjE2ODI0Mjc4NTQ.*_ga_CW55HF8NVT*MTY4NjA1NDYzMi4xNS4xLjE2ODYwNTQ2NDAuMC4wLjA."
                    // console.log(postInputs)
                    break;
                case 1:
                    postInputs.postimage = "https://firebasestorage.googleapis.com/v0/b/linkedinauth-c0893.appspot.com/o/imagen2.jpg?alt=media&token=b361a682-fa7c-4965-beb0-3e3eaa654906&_gl=1*8j6vn6*_ga*NDk4ODU0MTU3LjE2ODI0Mjc4NTQ.*_ga_CW55HF8NVT*MTY4NjA1NDYzMi4xNS4xLjE2ODYwNTQ3MTUuMC4wLjA."
                    // console.log(postInputs)
                    break;
                case 2:
                    postInputs.postimage = "https://firebasestorage.googleapis.com/v0/b/linkedinauth-c0893.appspot.com/o/imagen3.jpg?alt=media&token=54666420-369f-406d-a237-d13fc92685fd&_gl=1*i9602t*_ga*NDk4ODU0MTU3LjE2ODI0Mjc4NTQ.*_ga_CW55HF8NVT*MTY4NjA1NDYzMi4xNS4xLjE2ODYwNTQ3MzEuMC4wLjA."
                    // console.log(postInputs)
                    break;
                case 3:
                    postInputs.postimage = "https://firebasestorage.googleapis.com/v0/b/linkedinauth-c0893.appspot.com/o/imagen4.jpg?alt=media&token=dc2d280d-2b8a-430b-82bc-695abf1b0842&_gl=1*nzk801*_ga*NDk4ODU0MTU3LjE2ODI0Mjc4NTQ.*_ga_CW55HF8NVT*MTY4NjA1NDYzMi4xNS4xLjE2ODYwNTQ3NDIuMC4wLjA."
                    // console.log(postInputs)
                    break;
                default:
                    postInputs.postimage = "https://firebasestorage.googleapis.com/v0/b/linkedinauth-c0893.appspot.com/o/imagen5.jpg?alt=media&token=c408ceae-2a16-4c44-973b-97673921ea41&_gl=1*1qwv4jo*_ga*NDk4ODU0MTU3LjE2ODI0Mjc4NTQ.*_ga_CW55HF8NVT*MTY4NjA1NDYzMi4xNS4xLjE2ODYwNTQ3NTEuMC4wLjA."
                    // console.log(postInputs)
                    break;
            }
            postInputs.userpfp = "https://firebasestorage.googleapis.com/v0/b/linkedinauth-c0893.appspot.com/o/perfil.png?alt=media&token=b2876fd1-28b5-4d5a-92d3-78003f2509a6&_gl=1*1xnwklv*_ga*NDk4ODU0MTU3LjE2ODI0Mjc4NTQ.*_ga_CW55HF8NVT*MTY4NjA1NzMzOS4xNi4xLjE2ODYwNTczNjYuMC4wLjA."
            console.log ("pa ve", postInputs)
            Firebase.addPost(postInputs);

        }))
        post.appendChild(postbtn);

        newPost.appendChild(post)

        this.shadowRoot?.appendChild(newPost);

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css);
    }
}

customElements.define('create-post', CreatePost);