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
            <!-- <div>
              <a href="https://linkedin.com/in/riveraeu"><img src="/In-2CRev-66px-R.png" alt="linkedin icon" class="logo"></a>
              <a href="https://github.com/riveraeu"><img src="/GitHub-Mark-64px.png" alt="github icon" class="logo"></a>
              <a href="https://twitter.com/EugeneRivera"><img src="/Twitter_Social_Icon_Rounded_Square_Color.svg" alt="twitter icon" class="logo"></a>
            </div> -->
          </div>
          <div class="w-full md:w-1/2 lg:w-2/3 text-center md:text-left">
            <h1 class="text-5xl font-bold pb-5">Rivera Web Solutions</h1>
            <p class="text-xl font-medium leading-normal">
              Need a new website? Just looking for a design? How about
              help with Marketing and SEO? You have come to the right place, Eugene Rivera does all of the above, and more! Working with
              small businesses and individuals, Eugene helps to provide customers with meaniful
              solutions. Sound good? Get in touch with Eugene today, or check out what else he has been up to.
            </p>
            <a href="/contact"><button class="btn btn-blue my-8 p-4 focus:outline-none">Get in Touch</button></a>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto">
      <div class="flex flex-wrap justify-center text-grey-darker">
        <div class="w-full text-center py-8">
          <h1 class="heading text-blue-darkest">My Services</h1>
        </div>
        <div class="card lg:w-1/3 lg:px-10 lg:py-5">
          <img class="w-32" src="/design.svg" alt="design icon">
          <h2 class="sub-heading py-3">Design</h2>
          <p class="body-text text-left">Starting with basic sketches and wire frames, Eugene works with the customer to flesh out the best design for their business.
          The end result is a high fedility rendering of what your site will look like.
          </p>
        </div>
        <div class="card lg:w-1/3 lg:px-10 lg:py-5">
          <img class="w-32" src="/development.svg" alt="design icon">
          <h2 class="sub-heading py-3">Development</h2>
          <p class="body-text text-left">This is where Eugene is at his best. Using the latest web technologies, Eugene builds you a fast and responsive website. 
          Are you going to be updating your site with new content often? Eugene will integrate the right content management system for you, making it easy to upload your new work.
          </p>
        </div>
        <div class="card lg:w-1/3 lg:px-10 lg:py-5">
          <img class="w-32" src="/search.svg" alt="design icon">
          <h2 class="sub-heading py-3">Search Engine Optimization</h2>
          <p class="body-text text-left">Now you have a site that looks and preforms great, but how do people find it? Let Eugene help you out, by improving your sites search engine optimization.
          This will help your site show up when people search on google. 
          </p>
        </div>
        <a href="/contact"><button class="btn btn-blue my-8 p-4 focus:outline-none">Let's Talk</button></a>
      </div>
    </section>
    <section class="bg-grey-lighter pb-5">
      <div class="flex flex-wrap container mx-auto justify-center">
        <div class="w-full text-center py-8">
          <h1 class="heading text-blue-darkest">Featured Project</h1>
        </div>
        <div class="w-2/3 lg:w-1/2 text-center">
          <a :href="project.link">
            <VueResponsiveImage
              :image-url="project.heroImage"
              :image-ratio="2/1"
              :width-on-screen="50"
              :width-on-screen-smartphone="75"
              :image-class="'shadow-lg'"
            />
          </a>
        </div>
        <div class="w-full lg:w-1/2 mx-10 text-center text-grey-darkest" markdown="1">
          <a :href="project.link"><h2 class="sub-heading py-3">{{ project.title }}</h2></a>
          <a v-for="(link, index) in project.stackLinks" :key="index" :href="link.url"><img :src="project.stackIcons[index]" :alt="index" class="icons"></a>
          <p class="body-text text-left">{{ project.description }}</p>
          <a href="/projects"><button class="btn btn-blue my-8 p-4 text-center focus:outline-none">View More</button></a>
        </div>
      </div>
    </section>
    <section class="bg-blue-darkest pb-8">
      <div class="flex flex-wrap container mx-auto text-white px-5">
        <div class="w-full text-center py-8">
          <h1 class="heading">Featured Blog Post</h1>
        </div>
        <div class="w-full lg:w-3/4 text-center md:text-left">
          <h2 class="sub-heading underline py-3">{{ post.title }}</h2>
          <p class="body-text py-2">Posted: {{ post.date }}</p>
          <a v-for="(link, index) in post.topicLinks" :key="index" :href="link.url"><img :src="post.topicIcons[index]" :alt="index" class="icons"></a>
          <p class="body-text text-left">{{ post.short }}</p>
        </div>
        <div class="w-full lg:w-1/4 text-center">
          <nuxt-link :to="'/blog/' + post.id"><button class="btn btn-blue btn-blue-white my-8 p-4 lg:mt-32 focus:outline-none">Read More</button></nuxt-link>
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
      with_tag: 'featured'
    }).then(res => {
      return {
        project: {
          title: res.data.stories[0].content.title,
          stackLinks: Object.values(res.data.stories[0].content.stack_links[0]),
          stackIcons: Object.values(res.data.stories[0].content.stack_icons[0]),
          link: res.data.stories[0].content.link,
          heroImage: res.data.stories[0].content.hero_image.url,
          description: res.data.stories[0].content.description
        }, 
        post : {
          id: res.data.stories[1].slug,
          title: res.data.stories[1].content.title,
          topicLinks: Object.values(res.data.stories[1].content.topic_links[0]),
          topicIcons: Object.values(res.data.stories[1].content.topic_icons[0]),
          date: res.data.stories[1].content.date,
          short: res.data.stories[1].content.summary,
        }
      }
    }).catch(res => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  },
  mounted: function () {
    this.project.stackLinks = this.project.stackLinks.splice(1, 5)
    this.project.stackIcons = this.project.stackIcons.splice(1, 5)
    this.project.stackLinks = this.project.stackLinks.filter(link => {
      return link.url != ''
    })
    this.post.topicLinks = this.post.topicLinks.splice(1, 5)
    this.post.topicIcons = this.post.topicIcons.splice(1, 5)
    this.post.topicLinks = this.post.topicLinks.filter(link => {
      return link.url != ''
    })
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
@tailwind utilities;
</style>
