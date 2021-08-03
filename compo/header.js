class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = (
      <header class="nav__wrapper">
        <nav class="nav container">
          <input type="checkbox" id="icon-show" />
          <a href="/">
            <img class="logo" src="images/logo-lg.png" alt="" />
          </a>

          <label for="icon-show">
            <svg onclick="showmenu()" class="icon icon--primary nav__toggler">
              <use href="images/sprite.svg#menu"></use>
            </svg>
          </label>
          <div class="input-group">
            <input
              type="text"
              class="input"
              placeholder="Chercher un article......"
            />
            <button class="btn btn--accent">
              <svg class="icon">
                <use href="images/sprite.svg#search"></use>
              </svg>
            </button>
          </div>
          <div class="icon__wrapper">
            <a href="https://facebook.com/FamCameroun" title="Page Facebook">
              <svg class="icon icon--secondary">
                <use href="images/brands.svg#facebook"></use>
              </svg>
            </a>
            <a
              href="https://twitter.com/FAM_Cameroun?s=09"
              title="Page Twitter"
            >
              <svg class="icon icon--secondary">
                <use href="images/brands.svg#twitter"></use>
              </svg>
            </a>
            <a
              href="https://instagram.com/fam_cameroun?utm_medium=copy_link"
              title="Page Instagram"
            >
              <svg class="icon icon--primary">
                <use href="images/brands.svg#instagram"></use>
              </svg>
            </a>
          </div>
          <ul class="list nav__list">
            <li class="nav__item">
              <a href="index.html">Acceuil</a>
            </li>
            <li class="product nav__item collapsible">
              <div class="collapsible__header">
                <span class="special">PRODUITS </span>
                <svg class="icon icon--small icon--primary collapsible__icon">
                  <use href="images/solid.svg#chevron-down"></use>
                </svg>
              </div>
              <ul class="dropdown collapsible__content">
                <li class="nav__item">
                  <a href="gallery_boxers.html">Boxers</a>
                </li>
                <li class="nav__item">
                  <a href="gallery__trousse.html">Trousses de bains</a>
                </li>
                <li class="nav__item">
                  <a href="galllery_pyjama.html">Pyjamas</a>
                </li>
                <li class="nav__item">
                  <a href="gallery_shirt.html">Pyjashirts</a>
                </li>
              </ul>
            </li>
            <li id="blog" class="nav__item">
              <a href="#">blog</a>
              <span class="blog__message">BIENTOT DISPONIBLE</span>
            </li>
            <li id="about" class="nav__item">
              <a href="#">a propos</a>
              <span class="about__message">BIENTOT DISPONIBLE</span>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

customElements.define("header-component", Header);
