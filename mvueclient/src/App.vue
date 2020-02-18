<template>
  <div id="app">
    
    <router-view/>
    <footer-guide></footer-guide>
  </div>
</template>
<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";


export default {
  components: {
    FooterGuide
  }
};
</script>
<style >
#app {
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 50px;
  box-sizing: border-box;
}
</style>
