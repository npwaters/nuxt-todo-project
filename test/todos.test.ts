import _ from 'lodash'
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import { mutations, actions, getters } from '~/store/todos'

describe('store/todos.ts', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        todos: {
          namespaced: true,
          state: {
            list: [
              { id: '1', text: '1', done: false },
              { id: '2', text: '2', done: false },
              { id: '3', text: '3', done: false },
            ],
          },
          mutations,
          actions,
          getters,
        },
      },
    })
  })

  describe('todos', () => {
    let todos

    beforeEach(() => {
      todos = store.getters['todos/todos']
    })

    test('getter is a function', () => {
      expect(_.isArray(todos)).toBe(true)
    })

    test('should be 3 todos total', () => {
      expect(todos.length).toBe(3)
    })
  })
})
