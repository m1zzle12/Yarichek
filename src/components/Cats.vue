<template>
 <div>
   <h1>& He also have beautiful cats</h1>
   <div class="img-container">
     <img src="../assets/bayron_1.jpg" alt="img">
     <img src="../assets/bayron_2.jpg" alt="img">
   </div>
 </div>
</template>

<script>
export default {
  name: "CatsYarik"
}
</script>

<style scoped>
.img-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

img{ width: 400px; height: 400px; margin-top: 120px;}
</style>