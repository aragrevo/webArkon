<script>
  import Navbar from "./components/Navbar.svelte";
  import Sidebar from "./components/Sidebar.svelte";
  import Home from "./pages/Home.svelte";
  import Contact from "./pages/Contact.svelte";
  export let name;
  export let routes;
  // https://material.io/develop/web/docs/getting-started/
</script>

<style type="text/scss">
  @import "./scss/base.scss";
</style>

<main>
  <Navbar {routes} />

  <Home {name} />
  <Sidebar {routes} />
  <!-- <Quote /> -->
  <!-- <Menu /> module-->
  <!-- <Challenge /> -->
  <Contact />
  <div data-router />
</main>
