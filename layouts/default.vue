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
@tailwind preflight;
html, body {
  font-family: 'Roboto', sans-serif;
}
a {
  @apply text-blue-darkest no-underline
}
@tailwind utilities;
</style>

