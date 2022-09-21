import { Attribute } from "../Profile/Profile";

class SuggetsProfiles extends HTMLElement{
    name?: string;
    username?: string;
    location?: string;
    caption?: string;
    mainimg?: string;
    profileimg?: string;
    likes?: string;
    time?: string;
    comments?: string;
    status?: string;


    static get observedAttributes(){
        const atrs: Record<Attribute,null> = {
            name: null,
            username: null,
            location: null,
            caption: null,
            mainimg: null,
            profileimg: null,
            likes: null,
            time: null,
            comments: null,
            status: null
    }; return Object.keys(atrs);
}

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        console.log("Suggests open");
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute,
        oldValue: string | undefined,
        newValue: string | undefined
    ){
        this[propName] = newValue;
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/Components/Suggests/style.css">
            <div class="box">
                <div class="profSugg">
                    <img src="${this.profileimg}">
                    <h4>${this.username}</h4>
                    <h4 class="status">${this.status}</h4>
                    <a href="#">Follow</a>
            </div>
            </div>
            `;
        }
    }
}

customElements.define("suggets-profiles",SuggetsProfiles);
export default SuggetsProfiles;