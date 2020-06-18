<script>
  import Navbar from "./components/Navbar.svelte";
  import Home from "./components/Home.svelte";
  export let name;
  // https://material.io/develop/web/docs/getting-started/
</script>

<style type="text/scss">
  @import "./scss/base.scss";
</style>

<main>
  <Navbar />
  <Home id="home" {name} />
  <!-- <Quote /> -->
  <!-- <Menu /> module-->
  <!-- <Challenge /> -->
  <!-- <Contact /> module-->
</main>
