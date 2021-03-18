import { ActionTree, MutationTree } from 'vuex'
import { TodoItem } from '~/types'

export const state = () => ({
  list: [] as Array<TodoItem>,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
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

export const actions: ActionTree<RootState, RootState> = {
  async retrieveInitial({ commit }) {
    const todos = await this.$axios.$get('/api')
    commit('setInitial', todos)
  },
}
