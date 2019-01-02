<template>
  <div>
    <section id="banner" class="w-full bg-center bg-cover">
      <div class="py-32 px-10 text-white container mx-auto">
        <h1 class="text-5xl font-bold text-center py-4">{{ post.title }}</h1>
      </div>
    </section>
    <section>
      <div class="flex flex-wrap container mx-auto">
        <div class="w-full sm:w-3/4 mx-auto py-6 text-grey-darker">
          <p class="body-text px-4 py-2 italic">{{ post.headline }}</p>
          <p class="body-text px-4 py-2">{{ post.date }}</p>
        </div>
        <div id="blog-post" class="w-full sm:w-3/4 mx-auto body-text text-grey-darker" v-html="post.article"/>
      </div>
    </section>
    <vue-disqus :identifier="post.slug" :url="'https://eugene-rivera.com/blog/' + post.slug" shortname="https-eugene-rivera-com" class="container mx-auto my-8 px-4"/>
  </div>
</template>

 <script>
 import hljs from 'highlight.js';
 export default {
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories/blog/' + context.params.postId, {
      version: context.isDev ? 'draft' : 'published'
    }).then(res => {
      // console.log(res)
      return {
        post: {
          slug: res.data.story.slug,
          title: res.data.story.content.title,
          headline: res.data.story.content.headline,
          date: res.data.story.content.date,
          article: res.data.story.content.article
        }
      }
    }).catch(res => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  },
  mounted: function () {
    hljs.initHighlighting()
  }
}
</script>

<style scoped>
  @tailwind preflight;
  #blog-post >>> p {
    @apply p-4 leading-loose
  }
  #blog-post >>> h2 {
    @apply text-center py-4 font-medium
  }
  #blog-post >>> img, #blog-post >>> pre {
    @apply px-4
  }
  #banner {
    height: 40vh;
    background-image: url(https://res.cloudinary.com/rivera-web-solutions/image/upload/b_black,o_75,c_scale,w_663/v1545265115/eugene-rivera/maik-jonietz-535261-unsplash-min.jpg)
  }
  @screen md {
    #banner {
      background-image: url(https://res.cloudinary.com/rivera-web-solutions/image/upload/b_black,o_75,c_scale,w_873/v1545265115/eugene-rivera/maik-jonietz-535261-unsplash-min.jpg)
    }
  }
  @screen lg {
    #banner {
      background-image: url(https://res.cloudinary.com/rivera-web-solutions/image/upload/b_black,o_75,c_scale,w_1139/v1545265115/eugene-rivera/maik-jonietz-535261-unsplash-min.jpg)
    }
  }
  @screen xl {
    #banner {
      background-image: url(https://res.cloudinary.com/rivera-web-solutions/image/upload/b_black,o_75,c_scale,w_2194/v1545265115/eugene-rivera/maik-jonietz-535261-unsplash-min.jpg)
    }
  }
  @tailwind utilities;
</style>
 
 