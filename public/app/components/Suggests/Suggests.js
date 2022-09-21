class SuggetsProfiles extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        console.log("Suggests open");
    }
    static get observedAttributes() {
        const atrs = {
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
        return Object.keys(atrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
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
customElements.define("suggets-profiles", SuggetsProfiles);
export default SuggetsProfiles;
