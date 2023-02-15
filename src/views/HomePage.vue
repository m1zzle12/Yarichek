<template>
  <navigate-bar/>
  <IntroducePage/>
</template>

<script>
import IntroducePage from "@/components/IntroducePage";
import NavigateBar from "@/components/navigateBar";
export default {
  name: 'HomePage',
  components: {NavigateBar, IntroducePage},
}
</script>
<style lang="scss">
@import '@/variables/_vars.scss';
  .cover {
    background: $background_color;
  }
</style>
