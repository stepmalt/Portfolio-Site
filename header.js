class HeaderComponent extends HTMLElement {
    isOpen = false;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const styleLink = document.createElement('link');
        styleLink.rel = 'stylesheet';
        styleLink.href = 'css/style.css';
        this.shadowRoot.appendChild(styleLink);

        const template = document.createElement('template');
        template.innerHTML = `
            <header>
                <div class="logo">
                    <img src="assets/graphics/smlogo.svg" alt="SM Logo">
                </div>
                <nav>
                    <div class="navitems">
                        <a href="index.html">Home</a>
                        <div class="dropdown">
                            <button class="dropbtn">Projects</button>
                            <div class="dropdown-content">
                                <a href="tdpr.html">TDPR</a>
                                <a href="dfn.html">DFN</a>
                                <a href="goalpact.html">GoalPact</a>
                                <a href="glassdoor.html">Glassdoor</a>
                            </div>
                        </div>
                        <a href="resume.html">Resume</a>
                        <a class="navitem" href="https://linkedin.com" target="_blank"><img src="assets/graphics/linkedin.svg"
                                alt="LinkedIn"></a>
                        <a class="navitem" href="mailto:youremail@example.com"><img src="assets/graphics/email.svg"
                                alt="Email"></a>
                        <a class="navitem" href="https://medium.com" target="_blank"><img src="assets/graphics/medium.svg"
                                alt="Medium"></a>
                    </div>
                    <img id="hamburger" class="hamburger" src="assets/graphics/hamburger.svg" />

                    <div id="mobilenav" class="navitems2 closed">
                        <a href="index.html">Home</a>
                        <div class="dropdown">
                            <button class="dropbtn">Projects</button>
                            <div class="dropdown-content">
                                <a href="tdpr.html">TDPR</a>
                                <a href="dfn.html">DFN</a>
                                <a href="goalpact.html">GoalPact</a>
                                <a href="glassdoor.html">Glassdoor</a>
                            </div>
                        </div>

                        <a href="resume.html">Resume</a>
                        <div style="align-self: center; margin-top:auto; margin-bottom:6em;">
                            <a class="navitem" href="https://linkedin.com" target="_blank"><img
                                    src="assets/graphics/linkedin.svg" alt="LinkedIn"></a>
                            <a class="navitem" href="mailto:youremail@example.com"><img src="assets/graphics/email.svg"
                                    alt="Email"></a>
                            <a class="navitem" href="https://medium.com" target="_blank"><img src="assets/graphics/medium.svg"
                                    alt="Medium"></a>
                        </div>
                    </div>
                </nav>
            </header>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.mobileNav = this.shadowRoot.getElementById('mobilenav');
        this.hamburger = this.shadowRoot.getElementById('hamburger');
        this.openMobileNav = this.openMobileNav.bind(this);
        this.hamburger.addEventListener('click', this.openMobileNav);
    }

    closeMobileView() {
        if (this.isOpen) {
            this.openMobileNav()
        }
    }

    openMobileNav() {
        this.mobileNav.classList.remove("closed", "open");
        
        if (this.isOpen) {
            this.mobileNav.classList.add("closed");
            this.hamburger.src = "assets/graphics/hamburger.svg";
            this.isOpen = false;
        } else {
            this.mobileNav.classList.add("open");
            this.hamburger.src = "assets/graphics/x.svg";
            this.isOpen = true;
        }    
    }

    connectedCallback() {
        this.hamburger.addEventListener('click', this.openMobileNav);
        document.addEventListener('click', (event) => {
            const headerComponent = document.querySelector('header-component');
            const clickedInsideHeader = event.composedPath().includes(headerComponent);
            
            if (!clickedInsideHeader && headerComponent.isOpen) {
                headerComponent.closeMobileView();
            }
        });
    }

    disconnectedCallback() {
        this.hamburger.removeEventListener('click', this.openMobileNav);
    }
}



customElements.define('header-component', HeaderComponent);