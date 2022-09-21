import data from "./data.js";

import "./components/Import.js";
import MyProfile, {Attribute} from "./components/Profile/Profile.js";
import TopMenu from "./components/TopMenu/TopMenu.js";
import SuggetsProfiles from "./components/Suggests/Suggests.js";
import IgStories from "./components/Story/Story.js";
import ProfSwitch from "./components/ProfSwitch/ProfSwitch.js";

class AppContainer extends HTMLElement{
    menu: TopMenu[] = [];
    profiles: MyProfile[] = [];
    suggestions: SuggetsProfiles[] = [];
    stories: IgStories[] = [];
    profswitch: ProfSwitch[] = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        const instaMenu = this.ownerDocument.createElement("top-menu") as TopMenu;
        this.menu.push(instaMenu);

        const ProfSwitch = this.ownerDocument.createElement("prof-switch") as ProfSwitch;
        this.profswitch.push(ProfSwitch);

        data.forEach((user)=>{
            const suggested = this.ownerDocument.createElement("suggets-profiles") as SuggetsProfiles;
            suggested.setAttribute(Attribute.username, user.username);
            suggested.setAttribute(Attribute.profileimg, user.profileimg);
            suggested.setAttribute(Attribute.status, user.status);
            if (user.id === "1") {
                return;
            } else if(user.id > "6"){
                return;
            }
            this.suggestions.push(suggested);
            console.log("Suggested push");
        });
        
        data.forEach((user)=>{
            const story = this.ownerDocument.createElement("ig-stories") as IgStories;
            story.setAttribute(Attribute.username, user.username);
            story.setAttribute(Attribute.profileimg, user.profileimg);
            if (user.id === "1") {
                return;
            } else if(user.id > "6"){
                return;
            }
            this.stories.push(story);
            console.log("Stories push");
        });

        data.forEach((user)=>{
            const profileCard = this.ownerDocument.createElement("my-profile") as MyProfile;
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

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = "";
            this.menu.forEach((menu)=>{
                this.shadowRoot?.appendChild(menu);
            });
            this.profiles.forEach((profile)=>{
                this.shadowRoot?.appendChild(profile);
            });
            this.suggestions.forEach((suggest)=>{
                this.shadowRoot?.appendChild(suggest);
            });
            this.stories.forEach((story)=>{
                this.shadowRoot?.appendChild(story);
            });
            this.profswitch.forEach((prof)=>{
                this.shadowRoot?.appendChild(prof);
            });
        }
    }
}

customElements.define("app-container",AppContainer);