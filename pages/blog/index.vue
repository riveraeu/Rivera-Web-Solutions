<template>
  <div>
    <section class="bg-grey-lighter pt-16 pb-8">
      <div class="flex flex-wrap container mx-auto px-5">
        <div class="w-full text-center py-8">
          <h1 class="heading text-blue-darkest">Featured Blog Post</h1>
        </div>
        <div class="w-full lg:w-3/4 text-center md:text-left">
          <h2 class="sub-heading underline py-3">{{ posts[0].title }}</h2>
          <p class="body-text py-2">Posted: {{ posts[0].date }}</p>
          <a v-for="(link, index) in posts[0].topicLinks" :key="index" :href="link.url"><img :src="posts[0].topicIcons[index]" :alt="index" class="icons"></a>
          <p class="body-text text-left">{{ posts[0].short }}</p>
        </div>
        <div class="w-full lg:w-1/4 text-center">
          <nuxt-link :to="'/blog/' + posts[0].id"><button class="btn btn-blue btn-blue-white my-8 p-4 lg:mt-32 focus:outline-none">Read More</button></nuxt-link>
        </div>
      </div>
    </section>
    <section class="py-16">
      <div class="w-full text-center pb-8">
        <h1 class="heading text-blue-darkest">More Blog Posts</h1>
      </div>
      <div v-for="(post, index) in posts" v-if="index > 0" :key="post.id" class="flex flex-wrap container mx-auto justify-center py-4">
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
export default {
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories', {
      version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
      starts_with: 'blog/'
    }).then(res => {
      return {
        posts: res.data.stories.map(post => {
          return {
            id: post.slug,
            title: post.content.title,
            topicLinks: Object.values(post.content.topic_links[0]),
            topicIcons: Object.values(post.content.topic_icons[0]),
            date: post.content.date,
            short: post.content.summary,
            article: post.content.article
          }
        })
      }
    }).catch(res => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  }, 
  mounted: function () {
    this.posts.forEach(function(post) {
      post.topicLinks = post.topicLinks.splice(1, 5)
      post.topicIcons = post.topicIcons.splice(1, 5)
      post.topicLinks = post.topicLinks.filter(link => {
        return link.url != ''
      })
    })
  }
}
</script>

