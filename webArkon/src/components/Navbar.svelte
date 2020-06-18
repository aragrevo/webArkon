<script>
  export let name;
  const menu = [
    { id: "home", name: "Inicio", url: "" },
    { id: "services", name: "Servicios", url: "services" },
    { id: "gallery", name: "Galería", url: "gallery" },
    { id: "about", name: "Nosotros", url: "about" },
    { id: "contact", name: "Contáctanos", url: "contact" }
  ];
  // https://www.behance.net/gallery/97732711/Norm-Architects-web-brand?tracking_source=curated_galleries_list
</script>

<style type="text/scss">
  @import "../scss/base.scss";

  .Nav {
    $self: &;

    left: 0;
    padding: 16px 0 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;

    a {
      color: $color-black;
      text-decoration: none;
    }

    &--light a {
      color: $color-white;
    }

    &-wrapper {
      i {
        color: $color-primary;
        font-size: $font-size-large;
      }
      @include for-size(m) {
        display: none;
      }
    }

    &-list {
      display: none;
      grid-column: 1/-1;
      justify-content: center;
      list-style: none;
      padding: 0;

      @include for-size(m) {
        display: flex;
      }
    }

    &-item {
      font-family: $font-primary;
      font-size: $font-size-small;
      font-weight: 300;
      line-height: 2;
      margin-right: $padding-small;
      transition: transform 0.4s ease-in-out;

      &:active,
      &:focus,
      &:hover {
        transform: translateY(-5px);
      }

      &:first-child {
        border-bottom: 3px solid $color-primary;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>

<header class="Header">
  <nav class="Nav">
    <div class="grid">
      <div class="Nav-wrapper">
        <a href="/" class="brand-log">
          <i class="material-icons">menu</i>
        </a>
      </div>
      <ul class="Nav-list">
        {#each menu as item}
          <li class="Nav-item">
            <a href={item.url}>{item.name}</a>
          </li>
        {/each}
      </ul>
    </div>
  </nav>

</header>
