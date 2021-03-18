<template>
  <div>
    <input :checked="todo.done" @change="toggle(todo)" type="checkbox" />
    <span :class="{ done: todo.done }">{{ todo.text }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
import { TodoItem } from '~/types'

export default Vue.extend({
  name: 'TodoItem',
  props: {
    todo: {
      type: Object as () => TodoItem,
      required: true,
    },
  },
  methods: {
    ...mapMutations({
      toggle: 'todos/toggle',
    }),
  },
})
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
