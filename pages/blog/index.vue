<template>
  <div>
    <section class="bg-grey-lighter pt-16 pb-8">
      <div class="flex flex-wrap container mx-auto px-5">
        <div class="w-full text-center py-8">
          <h1 class="heading text-blue-darkest">Featured Blog Post</h1>
        </div>
        <div class="w-full lg:w-3/4 text-center md:text-left ">
          <h2 class="py-3"><span class="sub-heading underline">{{ posts[0].title }}</span> | <span class="body-text no-underline font-normal">{{ posts[0].date }}</span></h2>
          <p class="italic body-text pb-6">{{ posts[0].headline }}</p>
          <p class="body-text text-left">{{ posts[0].short }}</p>
        </div>
        <div class="w-full lg:w-1/4 text-center mb-4">
          <nuxt-link :to="'/blog/' + posts[0].id"><button class="btn btn-blue btn-blue-white lg:mt-24 focus:outline-none">Read More</button></nuxt-link>
        </div>
      </div>
    </section>
    <section id="more-posts" class="py-16">
      <div class="w-full text-center pb-8">
        <h1 class="heading text-blue-darkest">More Blog Posts</h1>
      </div>
      <div v-for="(post, index) in posts" v-if="index > 0" :key="post.id" class="flex flex-wrap container mx-auto justify-center py-4">
        <div class="w-full lg:w-3/4 text-center md:text-left">
          <h2 class="py-3"><span class="sub-heading underline">{{ post.title }}</span> | <span class="body-text no-underline font-normal">{{ post.date }}</span></h2>
          <p class="italic body-text pb-6">{{ post.headline }}</p>
          <p class="body-text text-left">{{ post.short }}</p>
        </div>
        <div class="w-full lg:w-1/4 text-center">
          <nuxt-link :to="'/blog/' + post.id"><button class="btn btn-blue btn-blue-white lg:mt-16 focus:outline-none">Read More</button></nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories', {
      version: context.isDev ? 'draft' : 'published',
      starts_with: 'blog/'
    }).then(res => {
      return {
        posts: res.data.stories.map(post => {
          return {
            id: post.slug,
            title: post.content.title,
            headline: post.content.headline,
            date: post.content.date,
            short: post.content.summary,
            article: post.content.article
          }
        })
      }
    }).catch(res => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  }
}
</script>

<style>
#more-posts {
  min-height: 60vh;
}
</style>
