<template>
  <b-container fluid="xl">
    <b-row class="todo-item">
      <b-col cols="2" class="todo-item-layout">
        <input :checked="todo.done" @change="markComplete(todo)" type="checkbox" />
      </b-col>
      <b-col class="todo-item-layout">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </b-col>
    </b-row>
  </b-container>
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
    markComplete(todo: TodoItem) {
      // this.toggle(todo)
      this.remove(todo)
    },
    ...mapMutations({
      toggle: 'todos/toggle',
      remove: 'todos/remove',
    }),
  },
})
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
.todo-item {
  border: solid black thin;
  margin-bottom: 0.3em;
  padding: 0.5em;
  /*box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);*/
  transition: 0.3s;
  min-height: 50px;
}

.todo-item:hover {
  /*box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);*/
  background-color: lightgrey;
}

.todo-item-layout {
  display: flex;
  justify-content: start;
  align-items: center;
}
</style>
