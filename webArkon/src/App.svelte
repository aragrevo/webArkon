<script>
  import Navbar from "./components/Navbar.svelte";
  import Home from "./components/Home.svelte";
  export let name;
  // https://material.io/develop/web/docs/getting-started/
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Quicksand:400,500,700");
  :global(body) {
    padding: 0;
    margin: 0;
    font-family: "Quicksand", sans-serif;
    box-sizing: border-box;
    font-size: 62.5%;
    font-size: 10px;
  }
</style>

<main>
  <Navbar {name} />
  <Home />
</main>
