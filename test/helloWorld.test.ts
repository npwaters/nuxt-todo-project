// src/components/__tests__/HelloWorld.spec.ts
import { shallowMount } from '@vue/test-utils'
import helloWorld from '../components/helloWorld.vue'

describe('HelloWorld.vue', () => {
  test('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(helloWorld, {
      propsData: { msg },
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
