<template>
  <div>
    <h1>About Me :D </h1>
    <div class="first-section">
      <img src="@/assets/coolBoy.jpg" alt="img">
      <h2>Favorite food - pizza, favorite pizza - pepperoni, favorite sausage - pickled</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheBestManInTheWorld"
}
</script>

<style scoped lang="scss">
@import '../variables/_vars.scss';
h1 {
  letter-spacing: 0.1em;
}
.first-section {
  margin-top: 80px;
}
img {
  width: 800px;
  height: 400px;
}
h2 {
  font-weight: 500;
  font-style: italic;
  font-size: $h2_font-size;
  margin-top: 40px;
}
</style>