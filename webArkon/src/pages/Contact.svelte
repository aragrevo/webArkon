<script>
  import ContactBox from "../components/ContactBox.svelte";
  const title = "Contáctanos";
</script>

<style type="text/scss">
  @import "../scss/base.scss";
  .Contact {
    padding: $padding-large 0;
    text-align: center;

    &-title {
      grid-column: 1/-1;
      text-align: center;
    }

    &-box {
      grid-column: 1/-1;
      margin-top: $padding-small;
    }
  }
</style>

<section class="Contact grid">
  <h3 class="Contact-title">{title}</h3>
  <div class="Contact-box">
    <ContactBox />
  </div>
</section>
