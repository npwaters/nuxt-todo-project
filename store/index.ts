import { MutationTree } from 'vuex'

export const state = () => ({
  counter: 0 as number,
})
export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  increment(state) {
    state.counter++
  },
}
