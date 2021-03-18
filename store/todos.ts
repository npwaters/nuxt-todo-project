import { ActionTree, MutationTree } from 'vuex'
import { TodoItem } from '~/types'

export const state = () => ({
  list: [] as Array<TodoItem>,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setInitial(state: RootState, todos: TodoItem[]) {
    state.list.push(...todos)
  },
  add(state: RootState, text: string) {
    state.list.push({
      text,
      done: false,
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo: TodoItem) {
    todo.done = !todo.done
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async retrieveInitial({ commit }) {
    const result = await this.$axios.$get('/api')
    const todos: TodoItem[] = []
    for (const item of result) {
      const todo: TodoItem = item
      todos.push(todo)
    }
    commit('setInitial', todos)
  },
}
