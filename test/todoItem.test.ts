import { shallowMount } from '@vue/test-utils'
import TodoItem from '@/components/todoItem.vue'

describe('TodoItem', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(TodoItem, {
      stubs: {
        'b-container': true,
        'b-row': true,
        'b-col': true,
        'b-button': true
      },
      propsData: {
        todo: { id: '1', text: '1', done: false }
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test('increments counter value on click', async () => {
    const wrapper = shallowMount(TodoItem, {
      stubs: {
        'b-container': true,
        'b-row': true,
        'b-col': true,
        'b-button': true
      },
      propsData: {
        todo: { id: '1', text: '1', done: false }
      }
    })
    const button = wrapper.find('input')
    const text = wrapper.find('span')

    // expect(text.text()).toContain('Total clicks: 0')

    await button.trigger('change')

    expect(text.text()).toContain('Total clicks: 1')
  })

})
