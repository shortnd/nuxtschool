<template>
  <div class="container">
    <article>
      <h1 class="title">{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </article>
    <aside>
      <ul>
        <li v-for="related in relatedPosts" :key="related.title">
          <nuxt-link :to="{ name: 'posts-id', params: { id: related.id } }">
            {{
            related.title
            }}
          </nuxt-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const postPromise = $axios.$get(
      "https://jsonplaceholder.typicode.com/posts/" + params.id
    );
    const relatedPostsPromise = $axios.get(
      "https://jsonplaceholder.typicode.com/posts/"
    );
    const [post, relatedPosts] = await Promise.all([
      postPromise,
      relatedPostsPromise
    ]);
    return {
      post,
      relatedPosts: relatedPosts.data
    };
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        { name: "twitter:title", content: this.post.title },
        { name: "twitter:content", content: this.post.content },
        { name: "twitter:image", content: "https://i.imgur.com/UYP2umJ.png" },
        { name: "twitter:card", content: "summary_large_image" }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  line-height: 1.5;
}
article * {
  margin-bottom: 1rem;
}
aside {
  min-width: 280px;
  max-width: 280px;
  padding-left: 2rem;
}
.title {
  font-size: 2rem;
}
</style>
