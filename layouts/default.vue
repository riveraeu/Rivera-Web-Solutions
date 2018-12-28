<template>
  <div>
    <Header/>
    <nuxt/>
    <!-- <Footer/> -->
  </div>
</template>

<script>
import Header from '@/components/header'
// import Footer from '@/components/footer'

export default {
  components: {
    Header
    // Footer
  }
}
</script>

<style>
html, body {
  font-family: 'Roboto', sans-serif;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>

