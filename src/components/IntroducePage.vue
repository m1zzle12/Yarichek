<template>
  <div class="cover">
    <h1 class="title">Yaroslav Moskalec</h1>
    <div class="first-section">
      <img src="../assets/title-photo_yarik.jpg" alt="img">
      <p>The ideal man: slim, muscular, handsome, able to achieve goals, unmanipulative, smart, loves to learn new things</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroducePage',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/variables/_vars.scss';
.cover {
  background: $default_black;
}
img {
  width: 400px;
  height: 400px;
}
.first-section {
  margin-top: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

}

p {
  font-size: $paragraph_font-size;
  color: $default_white;
  line-height: 40px;
  font-style: italic;
  width: 600px;
  letter-spacing: 0.15em;
}
</style>
