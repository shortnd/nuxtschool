<template>
  <div>
    <Logo />
    <h1 class="title">nuxtschool</h1>
    <div class="links">
      <nuxt-link
        v-for="post in posts"
        :to="{ name: 'posts-id', params: { id: post.id } }"
        :key="post.id"
      >{{ post.title }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Home page",
      meta: [
        { name: "twitter:title", content: "Nuxt Fundementals by Vue School" },
        { name: "twitter:content", content: "Nuxt + Vue" },
        { name: "twitter:image", content: "https://i.imgur.com/UYP2umJ.png" },
        { name: "twitter:card", content: "summary_large_image" }
      ]
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts.all;
    }
  }
};
</script>

<style>
</style>
