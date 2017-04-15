<template>
  <div class='ui menu'>
    <router-link to='/' class='item'>
      Home
    </router-link>
    <router-link to='/details' class='item'>
      Details
    </router-link>
    <router-link to='/photos' class='item'>
      Photos
    </router-link>
    <router-link to='/registry' class='item'>
      Registry
    </router-link>
    <router-link to='/rsvp' class='item'>
      RSVP
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
