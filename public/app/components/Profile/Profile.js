export var Attribute;
(function (Attribute) {
    Attribute["name"] = "name";
    Attribute["username"] = "username";
    Attribute["location"] = "location";
    Attribute["caption"] = "caption";
    Attribute["mainimg"] = "mainimg";
    Attribute["profileimg"] = "profileimg";
    Attribute["likes"] = "likes";
    Attribute["time"] = "time";
    Attribute["comments"] = "comments";
    Attribute["status"] = "status";
})(Attribute || (Attribute = {}));
class MyProfile extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
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
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
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
    render() {
        if (this.shadowRoot) {
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
