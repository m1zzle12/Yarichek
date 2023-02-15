<template>
  <div class="navbar header">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/cats">Cats</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navigateBar"
}
</script>

<style lang="scss" >
@import '@/variables/_vars.scss';

.header {
  background: $default_black;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
ul {
  display: flex;
  gap: 80px;

}
li {
  color: $default_white;
  font-size: $paragraph_font-size - 4px;
  font-weight: 500;
}
</style>