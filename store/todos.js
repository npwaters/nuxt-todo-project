export const state = () => ({
  list: [],
})

export const mutations = {
  setInitial(state, todos) {
    state.list = todos
  },
  add(state, text) {
    state.list.push({
      text,
      done: false,
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  },
}

export const actions = {
  async retrieveInitial({ commit }) {
    const todos = await this.$axios.$get('/api')
    commit('setInitial', todos)
  },
}
