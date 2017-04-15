<template>
  <div id="app" class='ui container'>
    <site-header></site-header>
    <div class='ui segment'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    'site-header': Header
  }
}
</script>

<style lang='scss'>
  body {
    background-image: url('/static/ktori_bg.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;

    .ui.container {
      background-color: rgba(255, 255, 255, 0.3);
      padding: 1rem 1rem 1rem;
      min-height: 100%;
    }
  }
</style>
