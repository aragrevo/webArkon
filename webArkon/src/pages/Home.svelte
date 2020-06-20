<script>
  export let name = "";
  const names = name.split(" ");
</script>

<style type="text/scss">
  @import "../scss/base.scss";
  .Home {
    $self: &;
    background-color: $color-cuaternary;
    background-image: url(../assets/images/banner.jpg);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    padding: $padding-large $padding-x-small $padding-extra-large;
    text-align: center;
    position: relative;

    //   @include for-size(m) {
    //   background-image: url("../../images/bg-large.png");
    // }

    &:after {
      content: "";
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background-color: rgba($color-black, 0.4);
      z-index: 1;
    }

    // &-title,
    &-subtitle {
      margin-bottom: $padding-small;
    }

    &-title,
    &-subtitle,
    &-icon,
    &-cta {
      position: relative;
      z-index: 2;
    }

    // &-icon {
    &-title {
      margin: $padding-large 0 $padding-small;
    }
  }
</style>

<section class="Home">
  <!-- <div class="Home-icon"> -->
  <!-- <img src="assets/images/logo2.png" alt="" /> -->
  <!-- <i class="material-icons">home</i> -->
  <!-- <Icon /> -->
  <!-- </div> -->
  <h1 class="Home-title">{names[0]}</h1>
  <h2 class="Home-subtitle">{names[1] + ' ' + names[2]}</h2>
  <!-- <div class="Home-cta"> -->
  <!-- <Cta /> -->
  <!-- <button class="Home-cta" type="button">Button</button> -->
  <!-- </div> -->
</section>
