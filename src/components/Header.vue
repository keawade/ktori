<template>
  <div>
    <div class='header-image ui segment'></div>
    <div class='ui stackable menu'>
      <router-link to='/' class='item'>
        Details
      </router-link>
      <router-link to='/photos' class='item'>
        Photos
      </router-link>
      <router-link to='/registry' class='item'>
        Registry
      </router-link>
      <a href='http://ktori.rsvpify.com' target='_blank' class='item'>
        RSVP
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header-image {
    height: 15vh;
    background-image: url('/static/ktori_header.jpg');
    background-size: cover;
    background-position: 0 52%;
    background-repeat: no-repeat;
  }
</style>
