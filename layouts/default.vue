<template>
  <div>
    <Header/>
    <nuxt/>
  </div>
</template>

<script>
import Header from '@/components/header'

export default {
  components: {
    Header
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

