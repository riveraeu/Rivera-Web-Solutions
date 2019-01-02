<template>
  <div>
    <section class="container mx-auto pt-16">
      <h1 class="heading text-blue-darkest py-8 text-center">About</h1>
      <div class="flex flex-wrap">
        <div class="w-full text-center lg:text-left">
          <a href="https://linkedin.com/in/riveraeu"><img src="/In-2CRev-66px-R.png" alt="linkedin icon" class="icons"></a>
          <a href="https://github.com/riveraeu"><img src="/GitHub-Mark-64px.png" alt="github icon" class="icons"></a>
          <a href="https://twitter.com/EugeneRivera"><img src="/Twitter_Social_Icon_Rounded_Square_Color.svg" alt="twitter icon" class="icons"></a>
        </div>
        <div class="w-1/2 lg:w-1/3 px-4 mx-auto">
          <VueResponsiveImage
            :image-url="'https://res.cloudinary.com/rivera-web-solutions/image/upload/c_scale,%width%,%height%/v1544473448/eugene-rivera/profile-picture.jpg'"
            :image-ratio="3/4"
            :width-on-screen="33"
            :width-on-screen-smartphone="50"
            :image-class="'shadow-lg'"
          />
        </div>
        <div class="body-text text-grey-darker w-full lg:w-2/3 px-4">
          <p class="pb-4">Hello and welcome, my name is Eugene Rivera and I am a Freelance Web Developer living in the San Francisco Bay Area. I have been interested in computers and technology my whole life. I started to learn programming at Sonoma State University, where I recived my undergraduate degree in Computer Science. During my time at school, I was exposed to web design and development and fell in love. After graduating I started making websites, at first just for friends and family. Slowly I have been able to expand to making sites for small business and indivuals. When I am not working, you can find me walking my dog, working out, and gamimg.</p>
          <p class="py-4">Working and teaching myself, I have had the freedom to choose some of the technologies that I use. Picking up JavasScript and getting into the all the different frameworks, I was draw to <a href="https://vuejs.org">Vue Js</a> which has been a blast to learn and work with. Vue has taught me a lot about the current state of web development and the different structures a website can have. Interested in server side rendering, I picked up <a href="https://nuxtjs.org">Nuxt Js</a> which is used to make universal Vue Js applications. Working with Nuxt, I have developed universal applications that use SSR, static sites, and single page applications. </p>
        </div>
      </div>
      <div class="flex flex-wrap py-6">
        <div class="body-text text-grey-darker w-full lg:w-1/2 px-4">
          <p>Here you can see the different technologies, hosting services, and web solutions, that I have experience with.There definitely items on this list that I prefer workign with over others, but that seems to be the nature of development. I have really enjoyed working with Nuxt Js as my application framework, the flexibility and preformance make generating a static sites easy. For styling I recently picked up <a href="https://tailwindcss.com/">Tailwind CSS</a> which is a Utility-First CSS Framework. Tailwind helps me to develop a customized style for my apps, without relying on tradtional compontent based frameworks. Hosting my static sites on <a href="https://www.netlify.com/
          ">Netlify</a> is free and easy. Check out my blog posts and projects to see what ive been working on, or <a href="/contact">drop me a line</a>.</p>
        </div>
        <div class="w-2/3 lg:w-1/3 px-4 mx-auto">
          <a v-for="(link, index) in skills.links" :key="index" :href="link.url"><img :src="skills.icons[index]" :alt="index" class="icons"></a>
        </div>  
      </div>
    </section>
  </div>
</template>

<script>
import VueResponsiveImage from "~/components/ResponsiveImage.vue"

export default {
  components: {
    VueResponsiveImage
  },
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories', {
      version: context.isDev ? 'draft' : 'published',
      starts_with: 'skills'
    }).then(res => {
      return {
        skills: {
          links: Object.values(res.data.stories[0].content.links[0]),
          icons: Object.values(res.data.stories[0].content.icons[0])
        }
      }
    }).catch(res => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  }, 
  mounted: function () {
    this.skills.icons = this.skills.icons.splice(1, 16)
    this.skills.links = this.skills.links.splice(1, 16)
  }
}
</script>

<style scoped>
@tailwind preflight;

  .icons {
    @apply w-8 h-8 m-4
  }

@tailwind utilities;
</style>