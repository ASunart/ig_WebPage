export enum Attribute {
    "name" = "name",
    "username" = "username",
    "location" = "location",
    "caption" = "caption",
    "mainimg" = "mainimg",
    "profileimg" = "profileimg",
    "likes" = "likes",
    "time" = "time",
    "comments" = "comments",
    "status" = "status"
}

class MyProfile extends HTMLElement{
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
        const attrs: Record<Attribute,null> = {
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
        };
        return Object.keys(attrs); // return ["age","lastname","name"]
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute, 
        oldValue: string | undefined,
        newValue: string | undefined,
        ){
            switch (propName) {
                case Attribute.name:
                    this.name = newValue ? String(newValue) : undefined;
                    break;
            
                default:
                    this[propName] = newValue;
                    break;
            }
            this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/Profile/style.css">
            <section>
                <div class="page">
                <div class="above">
                    <div class="userInform">
                    <div class="userImg">
                    <img src="${this.profileimg}" alt="" class="cover">
                    </div>
                    <h3>${this.username}<br><span>${this.location}</span></h3>
                </div>
                <div>
                <img src="../assets/more-dots.png" alt="" class="menu">
                </div>
            </div>
            <div class="mainPics">
                <img class="cover" src="${this.mainimg}"/>
            </div>
            <div class="theButton">
                <div class="left">
                    <img src="./assets/heart.png" alt="" class="btnLike">
                    <img src="./assets/chat-bubble.png" alt="" class="btnComment">
                    <img src="./assets/send.png" alt="">
                </div>
                <div class="rigth">
                    <img src="./assets/save-instagram.png" alt="" class="btnSave">
                </div>
            </div>
            <h4 class="likes">${this.likes} likes</h4>
            <h4 class="captions"><b>${this.username} </b>${this.caption}</h4>
            <h4 class="comments">View all ${this.comments} comments</h4>
            <div class="addComment">
                <div class="userImg">
                    <img src="${this.profileimg}" alt="">
                </div>
                <input type="text" class="theComment" placeholder="Add a comment..."></input>
            </div>
            <h5 class="time">${this.time} ago</h5>
            </div>
                </section>
            `;
        }
    }

}

customElements.define("my-profile", MyProfile);
export default MyProfile;