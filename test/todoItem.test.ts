import { shallowMount } from '@vue/test-utils'
import TodoItem from '@/components/todoItem.vue'

describe('TodoItem', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(TodoItem, {
      stubs: { 'b-container': true, 'b-row': true, 'b-col': true },
      propsData: {
        todo: { id: '1', text: '1', done: false }
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
