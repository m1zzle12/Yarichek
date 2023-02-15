<template>
  <navigate-bar/>
  <Cats/>
</template>

<script>
import navigateBar from "@/components/navigateBar";
import Cats from "@/components/Cats";
export default {
  name: "AboutCats",
  components: {
    navigateBar,
    Cats
  }

}
</script>

<style scoped>

</style>