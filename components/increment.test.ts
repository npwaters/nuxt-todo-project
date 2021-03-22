import { mount } from '@vue/test-utils'
import ClassAPICounter from './increment.vue'

describe('increment', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ClassAPICounter)
    expect(wrapper.vm).toBeTruthy()
  })
})
