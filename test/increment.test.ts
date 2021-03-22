import { mount } from '@vue/test-utils'
import ClassAPICounter from '../components/increment.vue'

describe('increment', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ClassAPICounter)
    expect(wrapper.vm).toBeTruthy()
  })
})
