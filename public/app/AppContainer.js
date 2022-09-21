import data from "./data.js";
import "./components/Import.js";
import { Attribute } from "./components/Profile/Profile.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.menu = [];
        this.profiles = [];
        this.suggestions = [];
        this.stories = [];
        this.profswitch = [];
        this.attachShadow({ mode: "open" });
        const instaMenu = this.ownerDocument.createElement("top-menu");
        this.menu.push(instaMenu);
        const ProfSwitch = this.ownerDocument.createElement("prof-switch");
        this.profswitch.push(ProfSwitch);
        data.forEach((user) => {
            const suggested = this.ownerDocument.createElement("suggets-profiles");
            suggested.setAttribute(Attribute.username, user.username);
            suggested.setAttribute(Attribute.profileimg, user.profileimg);
            suggested.setAttribute(Attribute.status, user.status);
            if (user.id === "1") {
                return;
            }
            else if (user.id > "6") {
                return;
            }
            this.suggestions.push(suggested);
            console.log("Suggested push");
        });
        data.forEach((user) => {
            const story = this.ownerDocument.createElement("ig-stories");
            story.setAttribute(Attribute.username, user.username);
            story.setAttribute(Attribute.profileimg, user.profileimg);
            if (user.id === "1") {
                return;
            }
            else if (user.id > "6") {
                return;
            }
            this.stories.push(story);
            console.log("Stories push");
        });
        data.forEach((user) => {
            const profileCard = this.ownerDocument.createElement("my-profile");
            profileCard.setAttribute(Attribute.username, user.username);
            profileCard.setAttribute(Attribute.caption, user.caption);
            profileCard.setAttribute(Attribute.likes, user.likes);
            profileCard.setAttribute(Attribute.location, user.location);
            profileCard.setAttribute(Attribute.mainimg, user.mainimg);
            profileCard.setAttribute(Attribute.comments, user.comments);
            profileCard.setAttribute(Attribute.time, user.time);
            profileCard.setAttribute(Attribute.profileimg, user.profileimg);
            this.profiles.push(profileCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = "";
            this.menu.forEach((menu) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(menu);
            });
            this.stories.forEach((story) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(story);
            });
            this.profswitch.forEach((prof) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(prof);
            });
            this.suggestions.forEach((suggest) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(suggest);
            });
            this.profiles.forEach((profile) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
            });
        }
    }
}
customElements.define("app-container", AppContainer);
