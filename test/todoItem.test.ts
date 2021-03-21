import { mount } from '@vue/test-utils'
import TodoItem from '@/components/todoItem.vue'

describe('TodoItem', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TodoItem)
    expect(wrapper.vm).toBeTruthy()
  })
})
