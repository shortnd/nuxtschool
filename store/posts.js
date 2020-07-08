export const state = () => ({
  all: []
})

export const mutations = {
  async addPosts (state) {
    const data = await this.$axios.$get("https://jsonplaceholder.typicode.com/posts")
    state.all = data
  }
}

export const actions = {
  getPosts({ commit }) {
    commit('posts/addPosts')
  }
}
