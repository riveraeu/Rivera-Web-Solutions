<template>
  <div>
    <section class="bg-grey-lighter pt-16 pb-8">
      <div class="flex flex-wrap container mx-auto justify-center">
        <div class="w-full text-center py-8">
          <h1 class="heading text-blue-darkest">Featured Project</h1>
        </div>
        <div class="w-2/3 lg:w-1/2 text-center">
          <VueResponsiveImage
            :image-url="projects[0].heroImage"
            :image-ratio="2/1"
            :width-on-screen="50"
            :width-on-screen-smartphone="75"
            :image-class="'shadow-lg'"
          />
        </div>
        <div class="w-full lg:w-1/2 mx-10 text-center text-grey-darkest">
          <h2 class="sub-heading py-3">{{ projects[0].title }}</h2>
          <a v-for="(link, index) in projects[0].stackLinks" :key="index" :href="link.url"><img :src="projects[0].stackIcons[index]" :alt="index" class="icons"></a>
          <p class="body-text text-left">{{ projects[0].description }}</p>
          <a :href="projects[0].link"><button class="btn btn-blue my-8 p-4 text-center focus:outline-none">View Site</button></a>
        </div>
      </div>
    </section>
    <section class="py-16">
      <div class="w-full text-center pb-8">
        <h1 class="heading text-blue-darkest">More Projects</h1>
      </div>
      <div v-for="(project, index) in projects" v-if="index > 0" :key="project.id" class="flex flex-wrap container mx-auto justify-center py-4">
        <div class="w-2/3 lg:w-1/2 text-center px-8">
          <VueResponsiveImage
            :image-url="project.heroImage"
            :image-ratio="2/1"
            :width-on-screen="50"
            :width-on-screen-smartphone="75"
            :image-class="'shadow-lg'"
          />
        </div>
        <div class="w-full lg:w-1/2 text-grey-darker text-center sm:text-left px-8">
          <h2 class="sub-heading py-3">{{ project.title }}</h2>
          <a v-for="(link, index) in project.stackLinks" :key="index" :href="link.url"><img :src="project.stackIcons[index]" :alt="index" class="icons"></a>
          <p class="body-text text-left">{{ project.description }}</p>
          <a :href="project.link"><button class="btn btn-blue my-8 p-4 focus:outline-none">View Site</button></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueResponsiveImage from "~/components/ResponsiveImage.vue";

export default {
  components: {
    VueResponsiveImage
  },
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories', {
      version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
      starts_with: 'projects/'
    }).then(res => {
      return {
        projects: res.data.stories.map(project => {
          return {
            title: project.content.title,
            stackLinks: Object.values(project.content.stack_links[0]),
            stackIcons: Object.values(project.content.stack_icons[0]),
            link: project.content.link,
            heroImage: project.content.hero_image.url,
            description: project.content.description
          }
        })
      }
    }).catch(res => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  }, 
  mounted: function () {
    this.projects.forEach(function(project) {
      project.stackLinks = project.stackLinks.splice(1, 5)
      project.stackIcons = project.stackIcons.splice(1, 5)
      project.stackLinks= project.stackLinks.filter(link => {
        return link.url != ''
      })
    })
  }
}
</script>

