<script>
  export let routes = [];
  let actived = false;
  const handlerClick = () => {
    console.log(actived);

    actived = !actived;
    console.log(actived);
  };
</script>

<style type="text/scss">
  @import "../scss/base.scss";
  i {
    color: $color-white;
  }
  .Sidebar {
    padding-bottom: 20px;
    width: 8%;
    color: #fff;
    float: right;
    position: -webkit-fixed;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 2;
    display: flex;
    flex-direction: column-reverse;

    &-menu {
      border-radius: 5%;
      background-color: #00000026;
      padding: 0 10px;
      width: 100%;

      button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        outline: none;
      }

      i {
        color: $color-white;
      }
    }

    &-list {
      list-style: none;
      margin: 10;
      padding: 0;
      padding-right: 40px;
      display: none;
      transition: display 0.9s;
    }
    &:hover &-list {
      display: block;
    }

    &-item {
      background-color: #434a54;
      border-radius: 100%;
      padding: 10px;
      margin: 10px;
      transition: transform 0.4s ease-in-out;

      a {
        display: flex;
        text-decoration: none;
      }

      &:active,
      &:focus,
      &:hover {
        transform: translateY(-5px);
      }
    }
  }
</style>

<div class="Sidebar">
  <div class="Sidebar-menu">
    <button on:click={handlerClick}>
      <i class="material-icons">menu</i>
    </button>
  </div>
  <ul class="Sidebar-list">
    {#each routes as route}
      <li class="Sidebar-item">
        <a href={route.path}>
          <i class="material-icons">{route.icon}</i>
        </a>
      </li>
    {/each}
  </ul>
</div>
