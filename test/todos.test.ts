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

  // describe('byStudio', () => {
  //   let byStudio
  //
  //   beforeEach(() => {
  //     byStudio = store.getters['movies/byStudio']
  //   })
  //
  //   test('is a function', () => {
  //     expect(_.isFunction(byStudio)).toBe(true)
  //   })
  //
  //   test('matches what the disney getter returns', () => {
  //     const movies = store.getters['movies/byStudio']('Disney')
  //     const disney = store.getters['movies/disney']
  //     expect(movies).toEqual(disney)
  //   })
  //
  //   test('shows all other studios with one entry each', () => {
  //     expect(byStudio('sony').length).toBe(1)
  //     expect(byStudio('warner bros.').length).toBe(1)
  //     expect(byStudio('universal').length).toBe(1)
  //     expect(byStudio('beijing enlight').length).toBe(1)
  //   })
  // })
})
