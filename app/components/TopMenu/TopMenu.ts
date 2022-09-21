class TopMenu extends HTMLElement{
    profileimg = "./assets/profile-img.png";


    constructor(){
        super();
        this.attachShadow({mode: "open"});

    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/Components/TopMenu/style.css">
            <div class="navbar">
            <img class="logo" src="./assets/insta-tipo.png">
            <input class="searchbox" type="search" placeholder="Search...">
            <div class="menuimages">
                <img src="./assets/home.png">
                <img src="./assets/messenger.png">
                <img src="./assets/more.png">
                <img src="./assets/explore.png">
                <img src="./assets/heart.png">
                <img class="profile" src="${this.profileimg}">     
            </div>
            </div>
        </div>
            `;
        }
    }
}

customElements.define("top-menu",TopMenu);
export default TopMenu;