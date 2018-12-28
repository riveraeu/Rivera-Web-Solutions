<template>
  <div>
    <section id="hero-image" class="flex items-center justify-center text-white py-32 px-5 bg-fixed">
      <div class="container mx-auto">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2 lg:w-1/3 text-center">
            <VueResponsiveImage
              :image-url="'https://res.cloudinary.com/rivera-web-solutions/image/upload/c_scale,%width%,%height%/v1544473448/eugene-rivera/profile-picture.jpg'"
              :image-ratio="3/4"
              :width-on-screen="50"
              :image-class="'profile-picture'"
            />
          </div>
          <div class="w-full md:w-1/2 lg:w-2/3 text-center md:text-left">
            <h1 class="text-5xl font-bold pb-5">{{ content.heroImage.title }}</h1>
            <p class="text-xl font-medium leading-normal">{{ content.heroImage.body }}</p>
            <a href="/contact"><button class="btn btn-blue my-8 p-4 focus:outline-none">{{ content.heroImage.link }}</button></a>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto py-12">
      <div class="flex flex-wrap justify-center text-grey-darker">
        <div class="w-full text-center">
          <h1 class="heading text-blue-darkest pb-4">{{ content.services.title }}</h1>
        </div>
        <div class="card lg:w-1/3 lg:px-10 lg:py-5">
          <img class="w-32" src="/design.svg" alt="design icon">
          <h2 class="sub-heading py-2">{{ content.services.design }}</h2>
          <p class="body-text text-left">{{ content.services.designBody }}</p>
        </div>
        <div class="card lg:w-1/3 lg:px-10 lg:py-5">
          <img class="w-32" src="/development.svg" alt="dev icon">
          <h2 class="sub-heading py-2">{{ content.services.dev }}</h2>
          <p class="body-text text-left">{{ content.services.devBody }}
          </p>
        </div>
        <div class="card lg:w-1/3 lg:px-10 lg:py-5">
          <img class="w-32" src="/search.svg" alt="design icon">
          <h2 class="sub-heading py-2">{{ content.services.seo }}</h2>
          <p class="body-text text-left">{{ content.services.seoBody }}</p>
        </div>
      </div>
    </section>
    <section id="site-building" class="bg-grey-lighter pb-8">
      <div class="flex flex-wrap container mx-auto px-4">
        <div class="w-full text-center py-8">
          <h1 class="heading text-blue-darkest">{{ content.process.title }}</h1>
        </div>
        <div class="w-full text-grey-darkest">
          <h2 class="sub-heading py-2 underline">{{ content.process.part1.title }}</h2>
          <p class="body-text">{{ content.process.part1.body1 }}</p>
        </div>
        <div class="flex flex-wrap text-grey-darkest pt-4"> 
          <p class="body-text w-full md:w-1/2">{{ content.process.part1.body2 }}</p>
          <div class="w-full md:w-1/2 xl:w-1/3 mx-auto p-6 xl:p-0">
            <VueResponsiveImage
              :image-url="content.process.part1.image"
              :image-ratio="5/3.5"
              :width-on-screen="33"
              :width-on-screen-tablet="50"
              :width-on-screen-smartphone="100"
              :image-class="'shadow-lg'"
            />
          </div>
        </div>
        <div class="w-full text-grey-darkest">
          <h2 class="sub-heading py-2 underline">{{ content.process.part2.title }}</h2>
          <p class="body-text">{{ content.process.part2.body1 }}</p>
        </div>
        <div class="flex flex-wrap text-grey-darkest pt-4">
          <div class="w-full md:w-1/2 xl:w-1/3 mx-auto p-6 xl:p-0">
            <VueResponsiveImage
              :image-url="content.process.part2.image"
              :image-ratio="6/4"
              :width-on-screen="33"
              :width-on-screen-tablet="50"
              :width-on-screen-smartphone="100"
              :image-class="'shadow-lg'"
            />
          </div>
          <p class="body-text w-full md:w-1/2" v-html="content.process.part2.body2"/>
        </div>
        <div class="w-full text-grey-darkest py-4">
          <h2 class="sub-heading py-2 underline">{{ content.process.part3.title }}</h2>
          <p class="body-text" v-html="content.process.part3.body"/>
        </div>
      </div>
    </section>
    <section class="bg-blue-darkest pb-2 text-white">
      <div class="container mx-auto ">
        <div class="pt-8 px-4 text-center w-full md:w-2/3 mx-auto">
          <h1 class="heading py-2">{{ content.contact.title }}</h1>
          <p class="text-xl font-medium leading-normal">{{ content.contact.body }}</p>
          <a href="/contact"><button class="btn btn-blue-white focus:outline-none">{{ content.contact.link }}</button></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueResponsiveImage from "~/components/ResponsiveImage.vue"
import frontPageContent from "~/assets/content/front-page.json"

export default {
  components: {
    VueResponsiveImage
  },
  data () {
    return {
      content: frontPageContent
    } 
  }
}
</script>

<style>
  @tailwind preflight;
  #hero-image {
    background-image: url("/Endless-Constellation-blue.svg");
  }
  .profile-picture {
    @apply rounded-full h-64 w-64
  }
  .card {
    @apply w-full text-center px-16 py-10
  }
  #site-building a {
    @apply text-blue-dark
  }
  @tailwind utilities;
</style>
