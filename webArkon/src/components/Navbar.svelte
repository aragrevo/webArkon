<script>
  export let name;
  const menu = [
    { id: "home", name: "Inicio", url: "#home" },
    { id: "services", name: "Servicios", url: "#services" },
    { id: "gallery", name: "Galería", url: "#gallery" },
    { id: "about", name: "Nosotros", url: "#about" },
    { id: "contact", name: "Contáctanos", url: "#contact" }
  ];
</script>

<header class="Header">
  <nav class="Nav">
    <div class="nav-wrapper">
      <a href="/" class="brand-log">{name}</a>
      <ul class="right hide-on-med-and-down">
        {#each menu as item}
          <li class="active">
            <a href={item.url}>{item.name}</a>
          </li>
        {/each}
      </ul>
    </div>
  </nav>
  <div class="mdc-tab-bar" role="tablist">
    <div class="mdc-tab-scroller">
      <div class="mdc-tab-scroller__scroll-area">
        <div class="mdc-tab-scroller__scroll-content">
          <button
            class="mdc-tab mdc-tab--active"
            role="tab"
            aria-selected="true"
            tabindex="0">
            <span class="mdc-tab__content">
              <span class="mdc-tab__icon material-icons" aria-hidden="true">
                favorite
              </span>
              <span class="mdc-tab__text-label">Favorites</span>
            </span>
            <span class="mdc-tab-indicator mdc-tab-indicator--active">
              <span
                class="mdc-tab-indicator__content
                mdc-tab-indicator__content--underline" />
            </span>
            <span class="mdc-tab__ripple" />
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
