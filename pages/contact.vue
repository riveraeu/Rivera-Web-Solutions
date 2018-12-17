<template>
  <div>
    <section id="banner" class="w-full bg-center bg-cover">
      <div class="py-32 px-10 text-white container mx-auto">
        <h1 class="text-5xl font-bold text-center py-4">Contact</h1>
      </div>
    </section>
    <section class="container mx-auto">
      <div class="w-full lg:w-2/3 py-8 mx-auto">
        <p class="text-xl font-medium text-grey-darker leading-normal px-8">
          Get in contact with Eugene today, simply fill out the form below and Eugene will response promptly.
          Please explain what service you are interesed in and details about your project in the message box.
          Dont wait, your beautiful website is just one click away!
        </p>
      </div>
      <div class="w-full max-w-xs md:max-w-sm mx-auto">
        <form action="" name="contact" method="POST" class="flex flex-wrap max-w-md mb-4 form-input" netlify>
          <div class="mb-4 w-full md:w-1/2 md:pr-4">
            <label class="block text-grey-darker text-sm font-bold mb-2">Name</label>
            <input name="name" class="input-field focus:outline-none focus:shadow-outline" type="text" placeholder="name" required>
          </div>
          <div class="mb-4 w-full md:w-1/2">
            <label class="block text-grey-darker text-sm font-bold mb-2">Email</label>
            <input name="email" class="input-field focus:outline-none focus:shadow-outline" type="email" placeholder="email" required>
          </div>
          <div class="w-full">
            <label class="block text-grey-darker text-sm font-bold mb-2">Message</label>
            <textarea name="message" class="input-field h-32 focus:outline-none focus:shadow-outline" placeholder="message" required/>
          </div>
          <div class="w-full text-center">
            <button class="btn btn-blue px-8 focus:outline-none focus:shadow-outline" type="submit">Send</button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import VueResponsiveImage from "~/components/ResponsiveImage.vue";
export default {
  components: {
    VueResponsiveImage
  }
};
</script>

<style>
@tailwind preflight;

.input-field {
  @apply shadow appearance-none border rounded w-full h-12 py-2 px-3 text-grey-darker leading-tight
}

#banner {
  height: 40vh;
  background-image: url("https://res.cloudinary.com/rivera-web-solutions/image/upload/b_black,o_75,c_scale,w_663/v1544834685/eugene-rivera/contact-banner.jpg");
}
@screen md {
  #banner {
    background-image: url("https://res.cloudinary.com/rivera-web-solutions/image/upload/b_black,o_75,c_scale,w_873/v1544834685/eugene-rivera/contact-banner.jpg");
  }
}
@screen lg {
  #banner {
    background-image: url("https://res.cloudinary.com/rivera-web-solutions/image/upload/b_black,o_75,c_scale,w_1139/v1544834685/eugene-rivera/contact-banner.jpg");
  }
}
@screen xl {
  #banner {
    background-image: url("https://res.cloudinary.com/rivera-web-solutions/image/upload/b_black,o_75,c_scale,w_2194/v1544834685/eugene-rivera/contact-banner.jpg");
  }
}
@tailwind utilities;
</style>
