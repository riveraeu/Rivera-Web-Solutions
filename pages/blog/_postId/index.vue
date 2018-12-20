<template>
  <div>
    <section id="banner" :style="{backgroundImage: 'url(' + post.bannerImage + ')'}" class="w-full bg-center bg-cover">
      <div class="py-32 px-10 text-white container mx-auto">
        <h1 class="text-5xl font-bold text-center py-4">{{ post.title }}</h1>
      </div>
    </section>
    <section>
      <div class="flex flex-wrap container mx-auto">
        <div class="text-center w-full py-6">
          <p class="body-text text-grey-darker py-2">Posted: {{ post.date }}</p>
          <a v-for="(link, index) in post.topicLinks" :key="index" :href="link.url"><img :src="post.topicIcons[index]" :alt="index" class="icons"></a>
        </div>
        <div class="w-full sm:w-3/4 mx-auto body-text text-grey-darker" v-html="post.article"/>
      </div>
    </section>
  </div>
</template>
 <script>
 export default {
   asyncData (context) {
    return context.app.$storyapi.get('cdn/stories', {
      version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
      starts_with: 'blog/'
    }).then(res => {
      return {
        post: {
          bannerImage: res.data.stories[0].content.banner_image,
          title: res.data.stories[0].content.title,
          topicLinks: Object.values(res.data.stories[0].content.topic_links[0]),
          topicIcons: Object.values(res.data.stories[0].content.topic_icons[0]),
          date: res.data.stories[0].content.date,
          article: res.data.stories[0].content.article
        }
      }
    }).catch(res => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  }, 
  mounted: function () {
    this.post.topicLinks = this.post.topicLinks.splice(1, 5)
    this.post.topicIcons = this.post.topicIcons.splice(1, 5)
    this.post.topicLinks = this.post.topicLinks.filter(link => {
      return link.url != ''
    })
  }
 }
 </script>

 <style>
 /* @tailwind preflight; */
 p {
   @apply p-4 leading-loose
 }
 h2 {
   @apply text-center py-4 font-medium
 }
 a {
   @apply text-blue-darkest
 }
 code {
   @apply bg-grey-lighter text-blue-darkest p-2
 }
 pre {
   @apply bg-black text-white p-4 my-4 w-3/4 mx-auto overflow-x-scroll
 }
 #banner {
   height: 40vh;
 }
@screen sm {
  pre {
    @apply w-1/2
  }
}
 /* @tailwind utilities; */
 </style>
 
 