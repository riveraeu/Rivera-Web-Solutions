<template>
  <nav class="fixed w-full text-white bg-blue-darkest py-6">
    <div class="flex sm:flex-no-wrap">
      <div class=" sm:block">
        <a href="/" class="nav-link font-bold py-8 sm:py-6">RWS</a>
      </div>
      <div class="text-right text-right w-full sm:hidden px-6">
        <button class="sm:hidden px-3 py-1 border rounded border-white text-white focus:outline-none" @click="showMobileMenu = !showMobileMenu">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>
      <div class="hidden sm:block text-right w-full">
        <a href="/about" class="nav-link">About</a>
        <a href="/projects" class="nav-link">Projects</a>
        <a href="/blog" class="nav-link">Blog</a>
        <a href="/contact" class="nav-link">Contact</a>
      </div>
      <div id="sidenav" :class="showMobileMenu ? 'w-1/2': 'w-0'" class="absolute pin-t pin-l h-screen bg-blue-darkest shadow-lg overflow-x-hidden">
        <a href="/" class="nav-link font-bold nav-link-mobile">RWS</a>
        <a href="/about" class="nav-link nav-link-mobile">About</a>
        <a href="/projects" class="nav-link nav-link-mobile">Projects</a>
        <a href="/blog" class="nav-link nav-link-mobile">Blog</a>
        <a href="/contact" class="nav-link nav-link-mobile">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false
    };
  }
};
</script>

<style>
@tailwind preflight;
#sidenav {
  transition: 0.5s
}
.nav-link {
  @apply p-6 font-bold bg-blue-darkest text-white
}
.nav-link:hover {
  @apply bg-blue-darker
}
.nav-link-mobile {
  @apply block text-center
}
@tailwind utilities;
</style>
