<template>
  <div>
    <Logo />
    <h1 class="title">nuxtschool</h1>
    <div class="links">
      <nuxt-link
        class="links-link"
        v-for="post in posts"
        :to="{ name: 'posts-id', params: { id: post.id } }"
        :key="post.id"
      >{{ post.title }}</nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  async asyncData({ $axios }) {
    const data = await $axios.$get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return {
      posts: data
    };
  },
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
  }
};
</script>

<style>
.links-link {
  display: block;
  padding: 5px;
  margin-bottom: 5px;
}
.links .links-link:last-of-type {
  margin-bottom: 0;
}
</style>
